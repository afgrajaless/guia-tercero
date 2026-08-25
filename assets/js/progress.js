/* ==========================================================================
   progress.js — Guarda el avance del estudiante en el navegador (localStorage)
   ========================================================================== */

(function (global) {
  'use strict';

  var STORAGE_KEY = 'guia-tercero:progress:v1';

  /** Cache en memoria para no leer localStorage en cada consulta. */
  var cache = null;

  /**
   * Lee el estado guardado desde localStorage.
   * @returns {Object} Objeto con el avance por area; vacio si no hay datos.
   */
  function read() {
    if (cache) { return cache; }
    var raw = null;
    try { raw = localStorage.getItem(STORAGE_KEY); } catch (error) { raw = null; }
    if (!raw) { cache = { areas: {} }; return cache; }
    try {
      var parsed = JSON.parse(raw);
      cache = parsed && typeof parsed === 'object' && parsed.areas ? parsed : { areas: {} };
    } catch (error) {
      cache = { areas: {} };
    }
    return cache;
  }

  /**
   * Persiste el estado actual en localStorage.
   * @returns {void}
   */
  function write() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(read()));
    } catch (error) {
      /* Modo privado o almacenamiento lleno: el avance solo vive en memoria. */
    }
  }

  /**
   * Construye la clave unica de una actividad dentro de un area.
   * @param {Object} unit - Unidad que contiene la leccion.
   * @param {Object} lesson - Leccion que contiene la actividad.
   * @param {string} activityId - Identificador de la actividad.
   * @returns {string} Clave con formato unidad/leccion/actividad.
   */
  function activityKey(unit, lesson, activityId) {
    return unit.id + '/' + lesson.id + '/' + activityId;
  }

  /**
   * Lista las claves de todas las actividades de una leccion.
   * @param {Object} unit - Unidad que contiene la leccion.
   * @param {Object} lesson - Leccion a inspeccionar.
   * @returns {Array<string>} Claves de actividad en orden de aparicion.
   */
  function lessonKeys(unit, lesson) {
    var keys = [];
    (lesson.blocks || []).forEach(function (block, index) {
      if (block.type !== 'activity') { return; }
      var id = (block.activity && block.activity.id) || ('a' + index);
      keys.push(activityKey(unit, lesson, id));
    });
    return keys;
  }

  var Progress = {
    activityKey: activityKey,
    lessonKeys: lessonKeys,

    /**
     * Indica si una actividad ya fue resuelta correctamente.
     * @param {string} areaId - Identificador del area.
     * @param {string} key - Clave de la actividad.
     * @returns {boolean} true si la actividad esta resuelta.
     */
    isSolved: function (areaId, key) {
      var area = read().areas[areaId];
      return Boolean(area && area[key] && area[key].solved);
    },

    /**
     * Devuelve cuantos intentos se han hecho en una actividad.
     * @param {string} areaId - Identificador del area.
     * @param {string} key - Clave de la actividad.
     * @returns {number} Numero de intentos registrados.
     */
    tries: function (areaId, key) {
      var area = read().areas[areaId];
      return (area && area[key] && area[key].tries) || 0;
    },

    /**
     * Registra el resultado de un intento en una actividad.
     * @param {string} areaId - Identificador del area.
     * @param {string} key - Clave de la actividad.
     * @param {boolean} solved - true si el intento fue correcto.
     * @returns {boolean} true si la actividad pasa de pendiente a resuelta.
     */
    record: function (areaId, key, solved) {
      var state = read();
      if (!state.areas[areaId]) { state.areas[areaId] = {}; }
      var entry = state.areas[areaId][key] || { solved: false, tries: 0 };
      var wasSolved = entry.solved;
      entry.tries += 1;
      entry.solved = entry.solved || Boolean(solved);
      state.areas[areaId][key] = entry;
      write();
      return !wasSolved && entry.solved;
    },

    /**
     * Calcula el avance de una leccion.
     * @param {string} areaId - Identificador del area.
     * @param {Object} unit - Unidad de la leccion.
     * @param {Object} lesson - Leccion a medir.
     * @returns {{solved:number,total:number,done:boolean}} Resumen de avance.
     */
    lessonStats: function (areaId, unit, lesson) {
      var keys = lessonKeys(unit, lesson);
      var solved = keys.filter(function (key) { return Progress.isSolved(areaId, key); }).length;
      return { solved: solved, total: keys.length, done: keys.length > 0 && solved === keys.length };
    },

    /**
     * Calcula el avance de una unidad completa.
     * @param {string} areaId - Identificador del area.
     * @param {Object} unit - Unidad a medir.
     * @returns {{solved:number,total:number,done:boolean}} Resumen de avance.
     */
    unitStats: function (areaId, unit) {
      var solved = 0;
      var total = 0;
      (unit.lessons || []).forEach(function (lesson) {
        var stats = Progress.lessonStats(areaId, unit, lesson);
        solved += stats.solved;
        total += stats.total;
      });
      return { solved: solved, total: total, done: total > 0 && solved === total };
    },

    /**
     * Calcula el avance total de un area.
     * @param {Object} area - Contenido completo del area.
     * @returns {{solved:number,total:number,percent:number}} Resumen de avance.
     */
    areaStats: function (area) {
      var solved = 0;
      var total = 0;
      (area.units || []).forEach(function (unit) {
        var stats = Progress.unitStats(area.id, unit);
        solved += stats.solved;
        total += stats.total;
      });
      return {
        solved: solved,
        total: total,
        percent: total === 0 ? 0 : Math.round((solved / total) * 100)
      };
    },

    /**
     * Borra el avance de un area concreta.
     * @param {string} areaId - Identificador del area a reiniciar.
     * @returns {void}
     */
    resetArea: function (areaId) {
      var state = read();
      delete state.areas[areaId];
      write();
    },

    /**
     * Borra todo el avance guardado de la guia.
     * @returns {void}
     */
    resetAll: function () {
      cache = { areas: {} };
      write();
    }
  };

  global.Progress = Progress;
}(window));

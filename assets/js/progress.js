/* ==========================================================================
   progress.js — Guarda el avance del estudiante en el navegador (localStorage)
   ========================================================================== */

(function (global) {
  'use strict';

  var STORAGE_KEY = 'guia-tercero:progress:v1';

  /** Bloques que, sin ser actividades, cuentan dentro del avance de la leccion. */
  var COUNTED_BLOCKS = ['notebook', 'checklist', 'breathing'];

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
    if (!raw) { cache = { areas: {}, data: {} }; return cache; }
    try {
      var parsed = JSON.parse(raw);
      cache = parsed && typeof parsed === 'object' && parsed.areas ? parsed : { areas: {}, data: {} };
      if (!cache.data) { cache.data = {}; }
    } catch (error) {
      cache = { areas: {}, data: {} };
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
      if (block.type === 'activity') {
        keys.push(activityKey(unit, lesson, (block.activity && block.activity.id) || ('a' + index)));
      }
      if (COUNTED_BLOCKS.indexOf(block.type) !== -1) {
        keys.push(activityKey(unit, lesson, block.id || ('b' + index)));
      }
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
     * Recupera un dato guardado de un bloque (checklist, termometro, etc.).
     * @param {string} areaId - Identificador del area.
     * @param {string} key - Clave del bloque.
     * @returns {*} Valor guardado, o null si no hay nada.
     */
    getData: function (areaId, key) {
      var data = read().data || {};
      return (data[areaId] && data[areaId][key] !== undefined) ? data[areaId][key] : null;
    },

    /**
     * Guarda un dato de un bloque sin marcarlo como resuelto.
     * @param {string} areaId - Identificador del area.
     * @param {string} key - Clave del bloque.
     * @param {*} value - Valor a guardar (debe poder convertirse a JSON).
     * @returns {void}
     */
    saveData: function (areaId, key, value) {
      var state = read();
      if (!state.data) { state.data = {}; }
      if (!state.data[areaId]) { state.data[areaId] = {}; }
      state.data[areaId][key] = value;
      write();
    },

    /**
     * Marca un bloque como hecho sin evaluarlo. Se usa en las consignas de
     * cuaderno y en los bloques que no tienen respuesta correcta.
     * @param {string} areaId - Identificador del area.
     * @param {string} key - Clave del bloque.
     * @returns {boolean} true si el bloque pasa de pendiente a hecho.
     */
    markDone: function (areaId, key) {
      return Progress.record(areaId, key, true);
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
      if (state.data) { delete state.data[areaId]; }
      write();
    },

    /**
     * Borra todo el avance guardado de la guia.
     * @returns {void}
     */
    resetAll: function () {
      cache = { areas: {}, data: {} };
      write();
    }
  };

  global.Progress = Progress;
}(window));

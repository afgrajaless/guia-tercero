/* ==========================================================================
   core.js — Registro de contenido, iconos y utilidades compartidas.
   Debe cargarse antes que cualquier archivo de /data y antes de home.js/area.js
   ========================================================================== */

(function (global) {
  'use strict';

  /** Contenido registrado por cada archivo de /data, indexado por id de area. */
  var areas = {};

  /** Orden de los dias de la semana: martes, miercoles y jueves. */
  var AREA_ORDER = ['wellbeing', 'math', 'reading'];

  /** Iconos SVG en linea. Se usan como marcas de area y de interfaz. */
  var ICONS = {
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6.5C10.5 5.2 8.6 4.5 6.5 4.5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2.5c2.1 0 4 .7 5.5 2 1.5-1.3 3.4-2 5.5-2H20a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-2.5c-2.1 0-4 .7-5.5 2Z"/><path d="M12 6.5v13"/></svg>',
    numbers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M7.5 9h4M9.5 7v4M14 8.5h3M14 15h3M7 15h4M9 13.2l0 .1M9 16.8l0 .1"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20Z"/><path d="M9.2 11.4h1.4l.9-1.6 1 3 .8-1.4h1.5"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15 9-2 4.2-4 1.8 2-4.2Z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 3.6 2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5 2.7 1-5.6-4.1-3.9 5.6-.8Z"/></svg>',
    sun: '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4"/></svg>',
    moon: '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8.2 8.2 0 0 1 9.5 4 8.3 8.3 0 1 0 20 14.5Z"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 14 6-6 6 6"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 10 6 6 6-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
    pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3Z"/><path d="M13.5 6.5l4 4"/></svg>',
    adult: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7.5" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16.5 11.5h5M16.5 15h5M16.5 18.5h3.5"/></svg>',
    reload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11.5A8 8 0 1 0 18 17"/><path d="M20 5.5V12h-6"/></svg>'
  };

  /**
   * Escapa caracteres peligrosos para insertar texto plano dentro de HTML.
   * @param {string} value - Texto a escapar.
   * @returns {string} Texto seguro para interpolar en innerHTML.
   */
  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /**
   * Crea un elemento con clase, atributos e hijos en una sola llamada.
   * @param {string} tag - Nombre de la etiqueta HTML.
   * @param {Object} [options] - { className, html, text, attrs, children }.
   * @returns {HTMLElement} El elemento ya construido.
   */
  function el(tag, options) {
    var opts = options || {};
    var node = document.createElement(tag);
    if (opts.className) { node.className = opts.className; }
    if (opts.text != null) { node.textContent = opts.text; }
    if (opts.html != null) { node.innerHTML = opts.html; }
    if (opts.attrs) {
      Object.keys(opts.attrs).forEach(function (key) {
        if (opts.attrs[key] != null) { node.setAttribute(key, opts.attrs[key]); }
      });
    }
    (opts.children || []).forEach(function (child) {
      if (child) { node.appendChild(child); }
    });
    return node;
  }

  /**
   * Devuelve una copia desordenada de un arreglo (algoritmo Fisher-Yates).
   * @param {Array} list - Arreglo original, no se modifica.
   * @returns {Array} Nuevo arreglo con los mismos elementos en otro orden.
   */
  function shuffle(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  /**
   * Normaliza texto para comparar respuestas: minusculas, sin tildes ni espacios extra.
   * La enye tambien pierde su virgulilla, asi que "nino" se acepta como "nino".
   * @param {string} value - Texto escrito por el estudiante o respuesta esperada.
   * @returns {string} Texto normalizado para comparacion.
   */
  function normalize(value) {
    return String(value == null ? '' : value)
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ');
  }

  /**
   * Convierte un numero escrito por el estudiante en una forma comparable.
   * Quita los separadores de miles (los grupos de exactamente tres cifras) y
   * unifica la coma decimal con el punto, de modo que "2.000", "2000" y
   * "2 000" se consideren el mismo numero.
   * @param {string} value - Texto que podria ser un numero.
   * @returns {string|null} Numero normalizado, o null si el texto no es numerico.
   */
  function numericKey(value) {
    var text = String(value == null ? '' : value).trim().replace(/\s/g, '');
    if (!/^\d+([.,]\d+)*$/.test(text)) { return null; }
    return text.replace(/[.,](\d{3})(?=[.,]|$)/g, '$1').replace(',', '.');
  }

  /**
   * Escribe un numero entero con separador de miles al estilo colombiano.
   * @param {number} value - Numero a formatear.
   * @returns {string} Numero con puntos cada tres cifras (por ejemplo 1.998).
   */
  function formatNumber(value) {
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  /**
   * Devuelve un numero entero al azar dentro de un rango, incluidos los extremos.
   * @param {number} min - Valor minimo posible.
   * @param {number} max - Valor maximo posible.
   * @returns {number} Numero entero entre min y max.
   */
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Compara la respuesta escrita por el estudiante con la esperada.
   * Si la respuesta esperada es un numero, ignora los separadores de miles;
   * si es texto, ignora mayusculas, tildes y espacios sobrantes.
   * @param {string} typed - Lo que escribio el estudiante.
   * @param {string} expected - La respuesta correcta definida en el contenido.
   * @returns {boolean} true si las dos respuestas se consideran iguales.
   */
  function answerMatches(typed, expected) {
    var expectedNumber = numericKey(expected);
    if (expectedNumber !== null) {
      var typedNumber = numericKey(typed);
      if (typedNumber !== null) { return typedNumber === expectedNumber; }
    }
    return normalize(typed) === normalize(expected);
  }

  /**
   * Muestra un mensaje flotante temporal en la parte inferior de la pantalla.
   * @param {string} message - Texto a mostrar.
   * @param {string} [icon] - Emoji o simbolo opcional que acompana el mensaje.
   * @returns {void}
   */
  function toast(message, icon) {
    var area = document.querySelector('.toast-area');
    if (!area) {
      area = el('div', { className: 'toast-area', attrs: { 'aria-live': 'polite' } });
      document.body.appendChild(area);
    }
    var node = el('div', {
      className: 'toast',
      html: (icon ? '<span aria-hidden="true">' + escapeHtml(icon) + '</span>' : '') +
            '<span>' + escapeHtml(message) + '</span>'
    });
    area.appendChild(node);
    setTimeout(function () {
      node.style.transition = 'opacity .35s ease';
      node.style.opacity = '0';
      setTimeout(function () { node.remove(); }, 400);
    }, 2600);
  }

  /**
   * Aplica el tema guardado y conecta el boton de cambio claro/oscuro.
   * @returns {void}
   */
  function setupTheme() {
    var KEY = 'guia-tercero:theme';
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (error) { stored = null; }
    if (stored === 'dark' || stored === 'light') {
      document.documentElement.setAttribute('data-theme', stored);
    }

    var button = document.querySelector('[data-theme-toggle]');
    if (!button) { return; }
    button.innerHTML = ICONS.sun + ICONS.moon;
    button.addEventListener('click', function () {
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var current = document.documentElement.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (error) { /* modo privado: se ignora */ }
    });
  }

  /**
   * Hace aparecer con animacion los elementos marcados con la clase .reveal.
   * @param {ParentNode} [root] - Contenedor donde buscar; por defecto todo el documento.
   * @returns {void}
   */
  function setupReveal(root) {
    var scope = root || document;
    var items = scope.querySelectorAll('.reveal:not(.is-visible)');
    if (!items.length) { return; }
    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(items, function (item) { item.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(items, function (item) { observer.observe(item); });
  }

  /**
   * Escribe el ano actual en los elementos marcados con data-year.
   * @returns {void}
   */
  function setupYear() {
    var year = String(new Date().getFullYear());
    Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (node) {
      node.textContent = year;
    });
  }

  global.Guide = {
    ICONS: ICONS,
    AREA_ORDER: AREA_ORDER,

    /**
     * Registra el contenido de un area. Lo llama cada archivo de /data.
     * @param {string} id - Identificador del area (reading, math, wellbeing).
     * @param {Object} data - Objeto con titulo, descripcion y unidades del area.
     * @returns {void}
     */
    register: function (id, data) {
      areas[id] = Object.assign({ id: id }, data);
    },

    /**
     * Obtiene el contenido registrado de un area.
     * @param {string} id - Identificador del area.
     * @returns {Object|null} Contenido del area o null si no existe.
     */
    get: function (id) { return areas[id] || null; },

    /**
     * Lista las areas registradas en el orden definido en AREA_ORDER.
     * @returns {Array<Object>} Areas con contenido disponible.
     */
    list: function () {
      return AREA_ORDER.map(function (id) { return areas[id]; }).filter(Boolean);
    },

    /**
     * Cuenta cuantas actividades tiene un area en total.
     * @param {Object} area - Contenido del area.
     * @returns {number} Numero de actividades sumando todas las unidades.
     */
    countActivities: function (area) {
      var total = 0;
      (area.units || []).forEach(function (unit) {
        (unit.lessons || []).forEach(function (lesson) {
          (lesson.blocks || []).forEach(function (block) {
            if (block.type === 'activity') { total += 1; }
          });
        });
      });
      return total;
    },

    /**
     * Devuelve todas las lecciones de un area en una lista plana.
     * @param {Object} area - Contenido del area.
     * @returns {Array<Object>} Lecciones con referencia a su unidad.
     */
    flatLessons: function (area) {
      var out = [];
      (area.units || []).forEach(function (unit, unitIndex) {
        (unit.lessons || []).forEach(function (lesson, lessonIndex) {
          out.push({ unit: unit, unitIndex: unitIndex, lesson: lesson, lessonIndex: lessonIndex });
        });
      });
      return out;
    },

    escapeHtml: escapeHtml,
    el: el,
    shuffle: shuffle,
    normalize: normalize,
    numericKey: numericKey,
    answerMatches: answerMatches,
    formatNumber: formatNumber,
    randomInt: randomInt,
    toast: toast,
    setupTheme: setupTheme,
    setupReveal: setupReveal,
    setupYear: setupYear
  };

  document.addEventListener('DOMContentLoaded', function () {
    setupTheme();
    setupYear();
    setupReveal();
  });
}(window));

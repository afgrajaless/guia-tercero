/* ==========================================================================
   area.js — Arma la pagina de una seccion: cabecera, indice, las lecciones
   seguidas, el solucionario del final y los bloques fijos que cada seccion
   necesita (banner para la familia, aviso previo, panel con los textos de
   lectura siempre accesibles y bloque de ayuda).

   La pagina es un documento para leer y copiar al cuaderno: no hay pestanas,
   no hay avance guardado, no hay nada que responder y tampoco se muestran las
   respuestas. Las unidades se muestran una tras otra para poder transcribirlas
   de corrido y para que la pagina se pueda imprimir completa.

   El solucionario vive fuera del sitio, en RESPUESTAS_GUIA_TERCERO.md, que se
   genera con _local/build-answers.js y es solo para la profesora.
   ========================================================================== */

(function (global) {
  'use strict';

  var Guide = global.Guide;
  var Blocks = global.Blocks;
  var el = Guide.el;
  var escapeHtml = Guide.escapeHtml;
  var ICONS = Guide.ICONS;

  /**
   * Reune todos los textos de lectura de la seccion para el panel flotante.
   * @param {Object} area - Contenido del area.
   * @returns {Array<Object>} Bloques de lectura en orden de aparicion.
   */
  function collectReadings(area) {
    var found = [];
    (area.units || []).forEach(function (unit) {
      (unit.lessons || []).forEach(function (lesson) {
        (lesson.blocks || []).forEach(function (block) {
          if (block.type === 'reading' && block.pinned !== false) { found.push(block); }
        });
      });
    });
    return found;
  }

  /**
   * Dibuja una leccion completa con su objetivo y todos sus bloques.
   * @param {Object} params - { lesson, index } de la leccion a dibujar.
   * @returns {HTMLElement} Tarjeta de la leccion.
   */
  function renderLesson(params) {
    var lesson = params.lesson;
    var section = el('section', {
      className: 'lesson reveal',
      attrs: { id: 'leccion-' + lesson.id }
    });

    var head = el('div', { className: 'lesson__head' });
    head.appendChild(el('p', {
      className: 'lesson__kicker',
      text: 'Lección ' + (lesson.code || (params.index + 1))
    }));
    head.appendChild(el('h3', { text: lesson.title }));
    section.appendChild(head);

    if (lesson.goal) {
      section.appendChild(el('p', {
        className: 'lesson__goal',
        html: '<strong>Vas a aprender:</strong> ' + Blocks.inline(lesson.goal)
      }));
    }

    (lesson.blocks || []).forEach(function (block) {
      var node = Blocks.render(block);
      if (node) { section.appendChild(node); }
    });

    return section;
  }

  /**
   * Dibuja una unidad completa: su titulo, su resumen y sus lecciones.
   * @param {Object} unit - Unidad a dibujar.
   * @returns {HTMLElement} Seccion de la unidad, con su ancla.
   */
  function renderUnit(unit) {
    var section = el('section', {
      className: 'unit stack',
      attrs: { id: 'unidad-' + unit.id }
    });

    var intro = el('div', { className: 'stack stack--tight' });
    intro.appendChild(el('h2', { text: unit.title }));
    if (unit.summary) {
      intro.appendChild(el('p', { className: 'area-head__lead', text: unit.summary }));
    }
    section.appendChild(intro);

    (unit.lessons || []).forEach(function (lesson, index) {
      section.appendChild(renderLesson({ lesson: lesson, index: index }));
    });

    return section;
  }

  /**
   * Dibuja un aviso que se puede cerrar y no vuelve a aparecer en el dispositivo.
   * @param {Object} notice - { title, paragraphs, dismissLabel } del aviso.
   * @param {string} storageKey - Clave con la que se recuerda que ya se cerro.
   * @param {string} variant - Clase modificadora: family o notice.
   * @returns {HTMLElement|null} Aviso, o null si ya fue cerrado antes.
   */
  function renderDismissible(notice, storageKey, variant) {
    var closed = null;
    try { closed = localStorage.getItem(storageKey); } catch (error) { closed = null; }
    if (closed === '1') { return null; }

    var box = el('aside', { className: 'notice notice--' + variant });
    box.appendChild(el('p', {
      className: 'notice__title',
      html: (variant === 'family' ? ICONS.adult : ICONS.compass) +
            '<span>' + escapeHtml(notice.title) + '</span>'
    }));
    (notice.paragraphs || []).forEach(function (text) {
      box.appendChild(el('p', { html: Blocks.inline(text) }));
    });

    var close = el('button', {
      className: 'btn btn--ghost btn--sm',
      attrs: { type: 'button' },
      text: notice.dismissLabel || 'Entendido, cerrar'
    });
    close.addEventListener('click', function () {
      try { localStorage.setItem(storageKey, '1'); } catch (error) { /* modo privado: se ignora */ }
      box.remove();
    });
    box.appendChild(el('div', { className: 'row', children: [close] }));
    return box;
  }

  /**
   * Dibuja el bloque de ayuda que permanece siempre visible al pie.
   * @param {Object} help - { title, lines, note } del bloque de ayuda.
   * @returns {HTMLElement} Bloque de ayuda.
   */
  function renderHelp(help) {
    var box = el('aside', { className: 'help' });
    box.appendChild(el('p', {
      className: 'help__title',
      html: ICONS.heart + '<span>' + escapeHtml(help.title) + '</span>'
    }));
    box.appendChild(el('ul', {
      className: 'help__list',
      children: (help.lines || []).map(function (line) {
        return el('li', { html: Blocks.inline(line) });
      })
    }));
    if (help.note) {
      box.appendChild(el('p', { className: 'help__note', html: Blocks.inline(help.note) }));
    }
    return box;
  }

  /**
   * Crea el panel que mantiene los textos de lectura accesibles mientras se
   * escribe en el cuaderno, tanto en computador como en celular.
   * @param {Array<Object>} readings - Bloques de lectura del dia.
   * @returns {void}
   */
  function createTextPanel(readings) {
    if (!readings.length) { return; }

    var label = readings.length > 1 ? 'Ver los textos' : 'Ver el texto';
    var toggle = el('button', {
      className: 'text-toggle',
      attrs: { type: 'button', 'aria-expanded': 'false' },
      html: ICONS.book + '<span>' + label + '</span>'
    });
    var panel = el('aside', {
      className: 'text-panel',
      attrs: { hidden: 'hidden', 'aria-label': 'Textos de la lectura' }
    });
    var body = el('div', { className: 'text-panel__body' });
    var close = el('button', {
      className: 'text-panel__close',
      attrs: { type: 'button', 'aria-label': 'Cerrar el texto' },
      text: '✕'
    });

    readings.forEach(function (block) { body.appendChild(Blocks.render(block)); });

    panel.appendChild(close);
    panel.appendChild(body);
    document.body.appendChild(toggle);
    document.body.appendChild(panel);

    /**
     * Abre o cierra el panel de los textos.
     * @param {boolean} open - true para abrirlo.
     * @returns {void}
     */
    function setOpen(open) {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.querySelector('span').textContent = open ? 'Ocultar' : label;
    }

    toggle.addEventListener('click', function () { setOpen(panel.hidden); });
    close.addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !panel.hidden) { setOpen(false); }
    });
  }

  /**
   * Punto de entrada: arma la pagina de la seccion indicada en el body.
   * @returns {void}
   */
  function start() {
    var areaId = document.body.dataset.area;
    var area = Guide.get(areaId);
    var headHost = document.querySelector('[data-area-head]');
    var railHost = document.querySelector('[data-unit-rail]');
    var lessonHost = document.querySelector('[data-lessons]');
    var extrasHost = document.querySelector('[data-extras]');
    if (!area || !headHost || !railHost || !lessonHost) { return; }

    document.title = area.title + ' | Guía de Tercero';


    /**
     * Pinta la cabecera con la seccion, el titulo y el aprendizaje.
     * @returns {void}
     */
    function paintHead() {
      headHost.appendChild(el('p', {
        className: 'lesson__kicker',
        text: area.section ? area.section.label : (area.kicker || 'Área')
      }));
      headHost.appendChild(el('h1', { className: 'area-head__title', text: area.title }));
      headHost.appendChild(el('p', { className: 'area-head__lead', text: area.description }));
      if (area.learning) {
        headHost.appendChild(el('p', {
          className: 'area-head__learning',
          html: '<strong>Aprendizaje:</strong> ' + Blocks.inline(area.learning)
        }));
      }

      /* No se anuncia cuantas actividades trae el dia: un numero grande a la
         entrada desanima antes de empezar. El indice de la derecha ya deja ver
         de que se trata la jornada. */
    }

    /**
     * Pinta el indice lateral con un enlace a cada unidad de la seccion.
     * @returns {void}
     */
    function paintRail() {
      railHost.appendChild(el('p', { className: 'unit-rail__title', text: 'En esta sección' }));
      (area.units || []).forEach(function (unit, index) {
        var link = el('a', {
          className: 'unit-chip',
          attrs: { href: '#unidad-' + unit.id }
        });
        link.appendChild(el('span', { className: 'unit-chip__num', text: String(index + 1) }));
        link.appendChild(el('span', { text: unit.title }));
        railHost.appendChild(link);
      });
    }

    /**
     * Pinta todas las unidades de la seccion, una tras otra, y el solucionario.
     * @returns {void}
     */
    function paintLessons() {
      if (!(area.units || []).length) {
        lessonHost.appendChild(el('div', {
          className: 'empty',
          html: '<p>Todavía no hay contenido en esta sección.</p>'
        }));
        return;
      }

      area.units.forEach(function (unit) {
        lessonHost.appendChild(renderUnit(unit));
      });

      Guide.setupReveal(lessonHost);
    }

    /**
     * Pinta los bloques fijos: banner para la familia, aviso y ayuda.
     * @returns {void}
     */
    function paintExtras() {
      if (area.banner) {
        var banner = renderDismissible(area.banner, 'guia-tercero:banner:' + areaId, 'family');
        if (banner) { headHost.parentNode.insertBefore(banner, headHost); }
      }
      if (area.notice) {
        var notice = renderDismissible(area.notice, 'guia-tercero:notice:' + areaId, 'notice');
        if (notice) { headHost.parentNode.insertBefore(notice, headHost.nextSibling); }
      }
      if (area.help && extrasHost) {
        extrasHost.appendChild(renderHelp(area.help));
      }
    }

    paintHead();
    paintExtras();
    paintRail();
    paintLessons();
    createTextPanel(collectReadings(area));
  }

  document.addEventListener('DOMContentLoaded', start);
}(window));

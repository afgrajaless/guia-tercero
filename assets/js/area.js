/* ==========================================================================
   area.js — Arma la pagina de un dia: cabecera, lecciones y los bloques fijos
   que cada seccion necesita (banner para la familia, aviso previo, panel con
   el texto de lectura siempre accesible y bloque de ayuda).
   ========================================================================== */

(function (global) {
  'use strict';

  var Guide = global.Guide;
  var Progress = global.Progress;
  var Blocks = global.Blocks;
  var el = Guide.el;
  var escapeHtml = Guide.escapeHtml;
  var ICONS = Guide.ICONS;

  /**
   * Dibuja una leccion completa con su objetivo y todos sus bloques.
   * @param {Object} params - { areaId, grades, unit, lesson, index, onSolved }.
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

    (lesson.blocks || []).forEach(function (block, index) {
      var node = Blocks.render(block, {
        areaId: params.areaId,
        grades: params.grades,
        unit: params.unit,
        lesson: lesson,
        index: index,
        onSolved: params.onSolved
      });
      if (node) { section.appendChild(node); }
    });

    return section;
  }

  /**
   * Dibuja la barra de progreso general del dia.
   * @param {Object} area - Contenido del area.
   * @returns {HTMLElement} Bloque de progreso con etiqueta y barra.
   */
  function renderProgress(area) {
    var stats = Progress.areaStats(area);
    var word = area.grades === false ? 'partes hechas' : 'actividades resueltas';
    var wrap = el('div', { className: 'progress' });
    var meta = el('div', { className: 'progress__meta' });
    meta.appendChild(el('span', { text: stats.solved + ' de ' + stats.total + ' ' + word }));
    meta.appendChild(el('span', { text: stats.percent + '%' }));

    var track = el('div', {
      className: 'progress__track',
      attrs: {
        role: 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
        'aria-valuenow': String(stats.percent),
        'aria-label': 'Avance en ' + area.title
      }
    });
    var fill = el('div', { className: 'progress__fill' });
    track.appendChild(fill);
    wrap.appendChild(meta);
    wrap.appendChild(track);
    requestAnimationFrame(function () { fill.style.width = stats.percent + '%'; });
    return wrap;
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
   * Crea el panel que mantiene el texto de lectura accesible mientras se
   * responden las preguntas, tanto en computador como en celular.
   * @returns {{setText: Function}} Controlador del panel.
   */
  function createTextPanel() {
    var toggle = el('button', {
      className: 'text-toggle',
      attrs: { type: 'button', 'aria-expanded': 'false' },
      html: ICONS.book + '<span>Ver el texto</span>'
    });
    var panel = el('aside', {
      className: 'text-panel',
      attrs: { hidden: 'hidden', 'aria-label': 'Texto de la lectura' }
    });
    var body = el('div', { className: 'text-panel__body' });
    var close = el('button', {
      className: 'text-panel__close',
      attrs: { type: 'button', 'aria-label': 'Cerrar el texto' },
      text: '✕'
    });

    panel.appendChild(close);
    panel.appendChild(body);
    toggle.hidden = true;
    document.body.appendChild(toggle);
    document.body.appendChild(panel);

    /**
     * Abre o cierra el panel del texto.
     * @param {boolean} open - true para abrirlo.
     * @returns {void}
     */
    function setOpen(open) {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.querySelector('span').textContent = open ? 'Ocultar el texto' : 'Ver el texto';
    }

    toggle.addEventListener('click', function () { setOpen(panel.hidden); });
    close.addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !panel.hidden) { setOpen(false); }
    });

    return {
      /**
       * Carga en el panel el texto de la leccion que se esta viendo.
       * @param {Object|null} block - Bloque de lectura, o null para ocultar el panel.
       * @returns {void}
       */
      setText: function (block) {
        setOpen(false);
        body.innerHTML = '';
        if (!block) { toggle.hidden = true; return; }
        body.appendChild(Blocks.render(block, {}));
        toggle.hidden = false;
      }
    };
  }

  /**
   * Punto de entrada: arma toda la pagina del dia indicado en el body.
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

    var currentUnit = 0;
    var textPanel = createTextPanel();

    /**
     * Vuelve a pintar la cabecera con el dia, el titulo y el progreso.
     * @returns {void}
     */
    function paintHead() {
      headHost.innerHTML = '';
      headHost.appendChild(el('p', {
        className: 'lesson__kicker',
        text: area.day ? area.day.label : (area.kicker || 'Área')
      }));
      headHost.appendChild(el('h1', { className: 'area-head__title', text: area.title }));
      headHost.appendChild(el('p', { className: 'area-head__lead', text: area.description }));
      if (area.learning) {
        headHost.appendChild(el('p', {
          className: 'area-head__learning',
          html: '<strong>Aprendizaje:</strong> ' + Blocks.inline(area.learning)
        }));
      }
      headHost.appendChild(renderProgress(area));

      var reset = el('button', {
        className: 'btn btn--ghost btn--sm',
        attrs: { type: 'button' },
        text: 'Reiniciar mi avance'
      });
      reset.addEventListener('click', function () {
        if (!global.confirm('Se borrará tu avance en ' + area.title + '. ¿Quieres continuar?')) { return; }
        Progress.resetArea(areaId);
        paintHead();
        paintRail();
        paintLessons();
        Guide.toast('Avance reiniciado');
      });
      headHost.appendChild(el('div', { className: 'row', children: [reset] }));
    }

    /**
     * Vuelve a pintar el riel lateral con las lecciones del dia.
     * @returns {void}
     */
    function paintRail() {
      railHost.innerHTML = '';
      railHost.appendChild(el('p', { className: 'unit-rail__title', text: 'Lecciones de hoy' }));
      (area.units || []).forEach(function (unit, index) {
        var stats = Progress.unitStats(areaId, unit);
        var chip = el('button', {
          className: 'unit-chip' + (stats.done ? ' is-done' : ''),
          attrs: {
            type: 'button',
            role: 'tab',
            'aria-selected': index === currentUnit ? 'true' : 'false'
          }
        });
        chip.appendChild(el('span', {
          className: 'unit-chip__num',
          html: stats.done ? '&#10003;' : String(index + 1)
        }));
        chip.appendChild(el('span', { text: unit.title }));
        chip.addEventListener('click', function () {
          currentUnit = index;
          global.history.replaceState(null, '', '#unidad-' + unit.id);
          paintRail();
          paintLessons();
          lessonHost.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        railHost.appendChild(chip);
      });
    }

    /**
     * Busca el texto de lectura de una unidad para cargarlo en el panel.
     * @param {Object} unit - Unidad que se esta mostrando.
     * @returns {Object|null} Bloque de lectura, o null si la unidad no tiene.
     */
    function findReading(unit) {
      var found = null;
      (unit.lessons || []).forEach(function (lesson) {
        (lesson.blocks || []).forEach(function (block) {
          if (!found && block.type === 'reading' && block.pinned !== false) { found = block; }
        });
      });
      return found;
    }

    /**
     * Vuelve a pintar las lecciones de la unidad seleccionada.
     * @returns {void}
     */
    function paintLessons() {
      var unit = (area.units || [])[currentUnit];
      lessonHost.innerHTML = '';
      if (!unit) {
        lessonHost.appendChild(el('div', {
          className: 'empty',
          html: '<p>Todavía no hay contenido en esta sección.</p>'
        }));
        return;
      }

      textPanel.setText(findReading(unit));

      var intro = el('div', { className: 'stack stack--tight' });
      intro.appendChild(el('h2', { text: unit.title }));
      if (unit.summary) {
        intro.appendChild(el('p', { className: 'area-head__lead', text: unit.summary }));
      }
      lessonHost.appendChild(intro);

      (unit.lessons || []).forEach(function (lesson, index) {
        lessonHost.appendChild(renderLesson({
          areaId: areaId,
          grades: area.grades,
          unit: unit,
          lesson: lesson,
          index: index,
          onSolved: function () {
            paintHead();
            paintRail();
          }
        }));
      });

      var nav = el('div', { className: 'lesson-nav' });
      if (currentUnit > 0) {
        var prev = el('button', {
          className: 'btn btn--ghost',
          attrs: { type: 'button' },
          html: ICONS.back + '<span>Lección anterior</span>'
        });
        prev.addEventListener('click', function () {
          currentUnit -= 1;
          paintRail();
          paintLessons();
          global.scrollTo({ top: 0, behavior: 'smooth' });
        });
        nav.appendChild(prev);
      } else {
        nav.appendChild(el('span'));
      }

      if (currentUnit < (area.units || []).length - 1) {
        var next = el('button', {
          className: 'btn btn--primary',
          attrs: { type: 'button' },
          html: '<span>Siguiente lección</span>' + ICONS.arrow
        });
        next.addEventListener('click', function () {
          currentUnit += 1;
          paintRail();
          paintLessons();
          global.scrollTo({ top: 0, behavior: 'smooth' });
        });
        nav.appendChild(next);
      }
      lessonHost.appendChild(nav);

      Guide.setupReveal(lessonHost);
    }

    /**
     * Pinta los bloques fijos del dia: banner para la familia, aviso y ayuda.
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

    var hash = global.location.hash.replace('#unidad-', '');
    if (hash) {
      var found = -1;
      (area.units || []).forEach(function (unit, index) {
        if (unit.id === hash) { found = index; }
      });
      if (found >= 0) { currentUnit = found; }
    }

    paintHead();
    paintExtras();
    paintRail();
    paintLessons();
  }

  document.addEventListener('DOMContentLoaded', start);
}(window));

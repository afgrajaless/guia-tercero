/* ==========================================================================
   area.js — Dibuja la pagina de un area (unidades, lecciones y actividades)
   ========================================================================== */

(function (global) {
  'use strict';

  var Guide = global.Guide;
  var Progress = global.Progress;
  var Blocks = global.Blocks;
  var el = Guide.el;
  var ICONS = Guide.ICONS;

  /**
   * Dibuja una leccion completa con su objetivo y todos sus bloques.
   * @param {Object} params - { areaId, unit, lesson, index, onSolved }.
   * @returns {HTMLElement} Tarjeta de la leccion.
   */
  function renderLesson(params) {
    var lesson = params.lesson;
    var section = el('section', {
      className: 'lesson reveal',
      attrs: { id: 'leccion-' + lesson.id }
    });

    var head = el('div', { className: 'lesson__head' });
    head.appendChild(el('p', { className: 'lesson__kicker', text: 'Lección ' + (params.index + 1) }));
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
   * Dibuja la barra de progreso general del area.
   * @param {Object} area - Contenido del area.
   * @returns {HTMLElement} Bloque de progreso con etiqueta y barra.
   */
  function renderProgress(area) {
    var stats = Progress.areaStats(area);
    var wrap = el('div', { className: 'progress' });
    var meta = el('div', { className: 'progress__meta' });
    meta.appendChild(el('span', { text: stats.solved + ' de ' + stats.total + ' actividades' }));
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
   * Punto de entrada: arma toda la pagina del area indicada en el body.
   * @returns {void}
   */
  function start() {
    var areaId = document.body.dataset.area;
    var area = Guide.get(areaId);
    var headHost = document.querySelector('[data-area-head]');
    var railHost = document.querySelector('[data-unit-rail]');
    var lessonHost = document.querySelector('[data-lessons]');
    if (!area || !headHost || !railHost || !lessonHost) { return; }

    document.title = area.title + ' | Guía de Tercero';

    var currentUnit = 0;

    /**
     * Vuelve a pintar la cabecera con el titulo, la descripcion y el progreso.
     * @returns {void}
     */
    function paintHead() {
      headHost.innerHTML = '';
      headHost.appendChild(el('p', { className: 'lesson__kicker', text: area.kicker || 'Área' }));
      headHost.appendChild(el('h1', { className: 'area-head__title', text: area.title }));
      headHost.appendChild(el('p', { className: 'area-head__lead', text: area.description }));
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
     * Vuelve a pintar el riel lateral con las unidades del area.
     * @returns {void}
     */
    function paintRail() {
      railHost.innerHTML = '';
      railHost.appendChild(el('p', { className: 'unit-rail__title', text: 'Unidades' }));
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
     * Vuelve a pintar las lecciones de la unidad seleccionada.
     * @returns {void}
     */
    function paintLessons() {
      var unit = (area.units || [])[currentUnit];
      lessonHost.innerHTML = '';
      if (!unit) {
        lessonHost.appendChild(el('div', {
          className: 'empty',
          html: '<p>Todavía no hay contenido en esta área.</p>'
        }));
        return;
      }

      var intro = el('div', { className: 'stack stack--tight' });
      intro.appendChild(el('h2', { text: unit.title }));
      if (unit.summary) {
        intro.appendChild(el('p', { className: 'area-head__lead', text: unit.summary }));
      }
      lessonHost.appendChild(intro);

      (unit.lessons || []).forEach(function (lesson, index) {
        lessonHost.appendChild(renderLesson({
          areaId: areaId,
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
          html: ICONS.back + '<span>Unidad anterior</span>'
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
          html: '<span>Siguiente unidad</span>' + ICONS.arrow
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

    var hash = global.location.hash.replace('#unidad-', '');
    if (hash) {
      var found = (area.units || []).findIndex(function (unit) { return unit.id === hash; });
      if (found >= 0) { currentUnit = found; }
    }

    paintHead();
    paintRail();
    paintLessons();
  }

  document.addEventListener('DOMContentLoaded', start);
}(window));

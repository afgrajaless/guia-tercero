/* ==========================================================================
   area.js — Dibuja la pagina de un area (unidades, lecciones y actividades)
   ========================================================================== */

(function (global) {
  'use strict';

  var Guide = global.Guide;
  var Progress = global.Progress;
  var Activities = global.Activities;
  var el = Guide.el;
  var escapeHtml = Guide.escapeHtml;
  var ICONS = Guide.ICONS;

  /**
   * Convierte marcas sencillas de autor (**negrita**) en HTML seguro.
   * @param {string} text - Texto escrito en el archivo de contenido.
   * @returns {string} HTML con el texto escapado y las negritas aplicadas.
   */
  function inline(text) {
    return escapeHtml(text).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  }

  /**
   * Crea una lista de parrafos a partir de un arreglo de textos.
   * @param {Array<string>} paragraphs - Textos a convertir en parrafos.
   * @returns {Array<HTMLElement>} Parrafos listos para insertar.
   */
  function paragraphs(list) {
    return (list || []).map(function (text) {
      return el('p', { html: inline(text) });
    });
  }

  /**
   * Dibuja un bloque de contenido segun su tipo.
   * @param {Object} block - Bloque definido en el archivo de contenido.
   * @param {Object} ctx - Contexto con areaId, unit, lesson e indice del bloque.
   * @returns {HTMLElement|null} Elemento del bloque, o null si el tipo no existe.
   */
  function renderBlock(block, ctx) {
    if (block.type === 'text') {
      return el('div', { className: 'prose', children: paragraphs(block.paragraphs) });
    }

    if (block.type === 'list') {
      var items = (block.items || []).map(function (text) {
        return el('li', { html: inline(text) });
      });
      var wrap = el('div', { className: 'prose' });
      if (block.title) { wrap.appendChild(el('h4', { text: block.title })); }
      wrap.appendChild(el('ul', { children: items }));
      return wrap;
    }

    if (block.type === 'callout') {
      var callout = el('aside', { className: 'callout' });
      callout.appendChild(el('p', {
        className: 'callout__title',
        html: ICONS.compass + '<span>' + escapeHtml(block.title || 'Para recordar') + '</span>'
      }));
      paragraphs(block.paragraphs).forEach(function (node) { callout.appendChild(node); });
      return callout;
    }

    if (block.type === 'reading') {
      var reading = el('article', { className: 'reading-text' });
      if (block.title) { reading.appendChild(el('h4', { text: block.title })); }
      paragraphs(block.paragraphs).forEach(function (node) { reading.appendChild(node); });
      if (block.source) {
        reading.appendChild(el('p', {
          className: 'area-card__text',
          text: block.source
        }));
      }
      return reading;
    }

    if (block.type === 'example') {
      var example = el('div', { className: 'example' });
      if (block.title) { example.appendChild(el('h4', { text: block.title })); }
      (block.lines || []).forEach(function (line) {
        example.appendChild(el('p', { html: inline(line) }));
      });
      return example;
    }

    if (block.type === 'activity') {
      var activity = block.activity || {};
      var id = activity.id || ('a' + ctx.index);
      var key = Progress.activityKey(ctx.unit, ctx.lesson, id);
      return Activities.render(activity, {
        solved: Progress.isSolved(ctx.areaId, key),
        onResult: function (ok) {
          var isNew = Progress.record(ctx.areaId, key, ok);
          if (isNew) {
            ctx.onSolved();
            Guide.toast('Actividad resuelta', '⭐');
          }
        }
      });
    }

    return null;
  }

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
        html: '<strong>Vas a aprender:</strong> ' + inline(lesson.goal)
      }));
    }

    (lesson.blocks || []).forEach(function (block, index) {
      var node = renderBlock(block, {
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

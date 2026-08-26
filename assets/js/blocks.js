/* ==========================================================================
   blocks.js — Dibuja cada bloque de contenido de una leccion.
   Los bloques se declaran en /data y aqui se convierten en HTML. Se separo de
   area.js para que cada archivo tenga una sola responsabilidad: area.js arma
   la pagina y este archivo arma el contenido.
   ========================================================================== */

(function (global) {
  'use strict';

  var Guide = global.Guide;
  var Progress = global.Progress;
  var Activities = global.Activities;
  var Figures = global.Figures;
  var el = Guide.el;
  var escapeHtml = Guide.escapeHtml;
  var ICONS = Guide.ICONS;

  /** Numero minimo de caracteres para dar por respondida una reflexion. */
  var MIN_REFLECTION = 10;

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
   * @param {Array<string>} list - Textos a convertir en parrafos.
   * @returns {Array<HTMLElement>} Parrafos listos para insertar.
   */
  function paragraphs(list) {
    return (list || []).map(function (text) {
      return el('p', { html: inline(text) });
    });
  }

  /**
   * Dibuja un bloque de explicacion en parrafos.
   * @param {Object} block - Bloque con su arreglo de parrafos.
   * @returns {HTMLElement} Contenedor de texto.
   */
  function renderText(block) {
    return el('div', { className: 'prose', children: paragraphs(block.paragraphs) });
  }

  /**
   * Dibuja una lista de pasos o ideas.
   * @param {Object} block - Bloque con title e items.
   * @returns {HTMLElement} Contenedor con la lista.
   */
  function renderList(block) {
    var wrap = el('div', { className: 'prose' });
    if (block.title) { wrap.appendChild(el('h4', { text: block.title })); }
    wrap.appendChild(el('ul', {
      children: (block.items || []).map(function (text) {
        return el('li', { html: inline(text) });
      })
    }));
    return wrap;
  }

  /**
   * Dibuja un recuadro destacado con un consejo o una idea para recordar.
   * @param {Object} block - Bloque con title y parrafos.
   * @returns {HTMLElement} Recuadro destacado.
   */
  function renderCallout(block) {
    var callout = el('aside', { className: 'callout' });
    callout.appendChild(el('p', {
      className: 'callout__title',
      html: ICONS.compass + '<span>' + escapeHtml(block.title || 'Para recordar') + '</span>'
    }));
    paragraphs(block.paragraphs).forEach(function (node) { callout.appendChild(node); });
    return callout;
  }

  /**
   * Dibuja un texto de lectura con tipografia mas grande y espaciada.
   * @param {Object} block - Bloque con title, parrafos y fuente opcional.
   * @returns {HTMLElement} Articulo con el texto de lectura.
   */
  function renderReading(block) {
    var reading = el('article', { className: 'reading-text' });
    if (block.title) { reading.appendChild(el('h4', { text: block.title })); }
    paragraphs(block.paragraphs).forEach(function (node) { reading.appendChild(node); });
    if (block.source) {
      reading.appendChild(el('p', { className: 'reading-text__source', text: block.source }));
    }
    return reading;
  }

  /**
   * Dibuja un ejemplo resuelto paso a paso.
   * @param {Object} block - Bloque con title y lineas.
   * @returns {HTMLElement} Recuadro con el ejemplo.
   */
  function renderExample(block) {
    var example = el('div', { className: 'example' });
    if (block.title) { example.appendChild(el('h4', { text: block.title })); }
    (block.lines || []).forEach(function (line) {
      example.appendChild(el('p', { html: inline(line) }));
    });
    return example;
  }

  /**
   * Dibuja un diagrama generado por figures.js.
   * @param {Object} block - Bloque con la figura y sus parametros.
   * @returns {HTMLElement} Figura con su descripcion accesible.
   */
  function renderFigure(block) {
    return Figures.render(block);
  }

  /**
   * Dibuja una nota dirigida al docente o al acudiente, colapsada por defecto.
   * @param {Object} block - Bloque con title y parrafos.
   * @returns {HTMLElement} Bloque desplegable con la nota.
   */
  function renderAdult(block) {
    var box = el('details', { className: 'adult' });
    box.appendChild(el('summary', {
      className: 'adult__summary',
      html: ICONS.adult + '<span>' + escapeHtml(block.title || 'Para el adulto que acompaña') + '</span>'
    }));
    var body = el('div', { className: 'adult__body' });
    paragraphs(block.paragraphs).forEach(function (node) { body.appendChild(node); });
    (block.items || []).length && body.appendChild(el('ul', {
      children: (block.items || []).map(function (text) { return el('li', { html: inline(text) }); })
    }));
    box.appendChild(body);
    return box;
  }

  /**
   * Dibuja una pregunta abierta de reflexion. Nunca se marca como incorrecta:
   * el estudiante escribe, guarda y el bloque queda registrado como hecho.
   * @param {Object} block - Bloque con question, placeholder y ayuda opcional.
   * @param {Object} ctx - Contexto con areaId, unit, lesson, index y onSolved.
   * @returns {HTMLElement} Bloque de reflexion.
   */
  function renderReflect(block, ctx) {
    var key = Progress.activityKey(ctx.unit, ctx.lesson, block.id || ('r' + ctx.index));
    var section = el('section', { className: 'reflect' });

    section.appendChild(el('p', {
      className: 'reflect__tag',
      html: ICONS.pencil + '<span>Para pensar</span>'
    }));
    section.appendChild(el('p', { className: 'reflect__question', text: block.question }));

    if (block.help) {
      section.appendChild(el('p', { className: 'reflect__help', text: block.help }));
    }

    var input = el('textarea', {
      className: 'reflect__input',
      attrs: {
        rows: '4',
        placeholder: block.placeholder || 'Escribe aquí lo que piensas...',
        'aria-label': block.question
      }
    });
    input.value = Progress.getNote(ctx.areaId, key);
    section.appendChild(input);

    var status = el('p', { className: 'reflect__status', attrs: { role: 'status', 'aria-live': 'polite' } });
    var save = el('button', {
      className: 'btn btn--primary btn--sm',
      attrs: { type: 'button' },
      text: 'Guardar mi respuesta'
    });

    save.addEventListener('click', function () {
      if (input.value.trim().length < MIN_REFLECTION) {
        status.textContent = 'Escribe un poco más para poder guardarlo.';
        status.className = 'reflect__status is-pending';
        return;
      }
      var isNew = Progress.saveNote(ctx.areaId, key, input.value);
      status.textContent = 'Guardado. Tu respuesta queda en este dispositivo.';
      status.className = 'reflect__status is-saved';
      if (isNew) {
        ctx.onSolved();
        Guide.toast('Reflexión guardada', '✍️');
      }
    });

    section.appendChild(el('div', { className: 'activity__actions', children: [save, status] }));
    section.appendChild(el('p', {
      className: 'reflect__note',
      text: 'Aquí no hay respuestas correctas ni incorrectas.'
    }));

    if (Progress.isSolved(ctx.areaId, key)) {
      status.textContent = 'Ya respondiste esta pregunta. Puedes cambiar tu respuesta cuando quieras.';
      status.className = 'reflect__status is-saved';
    }

    return section;
  }

  /**
   * Dibuja una actividad interactiva y registra su resultado en el avance.
   * @param {Object} block - Bloque que contiene la definicion de la actividad.
   * @param {Object} ctx - Contexto con areaId, unit, lesson, index y onSolved.
   * @returns {HTMLElement} Actividad lista para responder.
   */
  function renderActivity(block, ctx) {
    var activity = block.activity || {};
    var key = Progress.activityKey(ctx.unit, ctx.lesson, activity.id || ('a' + ctx.index));
    return Activities.render(activity, {
      solved: Progress.isSolved(ctx.areaId, key),
      onResult: function (ok) {
        if (Progress.record(ctx.areaId, key, ok)) {
          ctx.onSolved();
          Guide.toast('Actividad resuelta', '⭐');
        }
      }
    });
  }

  /** Constructor de cada tipo de bloque disponible en el contenido. */
  var RENDERERS = {
    text: renderText,
    list: renderList,
    callout: renderCallout,
    reading: renderReading,
    example: renderExample,
    figure: renderFigure,
    adult: renderAdult,
    reflect: renderReflect,
    activity: renderActivity
  };

  global.Blocks = {
    TYPES: Object.keys(RENDERERS),
    inline: inline,

    /**
     * Dibuja un bloque de contenido segun su tipo.
     * @param {Object} block - Bloque definido en el archivo de contenido.
     * @param {Object} ctx - Contexto con areaId, unit, lesson, index y onSolved.
     * @returns {HTMLElement|null} Elemento del bloque, o null si el tipo no existe.
     */
    render: function (block, ctx) {
      var build = RENDERERS[block.type];
      return build ? build(block, ctx) : null;
    }
  };
}(window));

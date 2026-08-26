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

  /** Acuses calidos para las secciones que no califican (psicosocial). */
  var WARM = ['Gracias por contarlo.', 'Anotado.', 'Está bien sentir eso.', 'Listo, sigamos.'];

  /** Acuses neutros para las secciones que si califican. */
  var PLAIN = ['Listo. Sigue con lo siguiente.', 'Anotado.', 'Hecho.'];

  /**
   * Elige un mensaje al azar de una lista.
   * @param {Array<string>} list - Mensajes disponibles.
   * @returns {string} Un mensaje de la lista.
   */
  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

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
   * Calcula la clave de almacenamiento de un bloque dentro de su leccion.
   * @param {Object} block - Bloque de contenido.
   * @param {Object} ctx - Contexto con unit, lesson e index.
   * @returns {string} Clave unica del bloque.
   */
  function blockKey(block, ctx) {
    return Progress.activityKey(ctx.unit, ctx.lesson, block.id || ('b' + ctx.index));
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
    wrap.appendChild(el(block.ordered ? 'ol' : 'ul', {
      className: block.ordered ? 'prose__steps' : '',
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
    if (block.lead) { reading.appendChild(el('p', { className: 'reading-text__lead', html: inline(block.lead) })); }
    (block.paragraphs || []).forEach(function (entry) {
      if (typeof entry === 'string') {
        reading.appendChild(el('p', { html: inline(entry) }));
        return;
      }
      if (entry.heading) {
        reading.appendChild(el('h5', { className: 'reading-text__step', text: entry.heading }));
      }
      if (entry.steps) {
        reading.appendChild(el('ol', {
          className: 'prose__steps',
          children: entry.steps.map(function (step) { return el('li', { html: inline(step) }); })
        }));
      }
    });
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
   * Dibuja una tabla sencilla, por ejemplo la tabla posicional.
   * @param {Object} block - Bloque con title, headers y rows.
   * @returns {HTMLElement} Tabla dentro de un contenedor que puede desplazarse.
   */
  function renderTable(block) {
    var wrap = el('div', { className: 'data-table' });
    if (block.title) { wrap.appendChild(el('h4', { text: block.title })); }

    var scroller = el('div', { className: 'scroll-x' });
    var table = el('table', { className: 'data-table__grid' });

    if (block.headers) {
      table.appendChild(el('thead', {
        children: [el('tr', {
          children: block.headers.map(function (head) { return el('th', { html: inline(head) }); })
        })]
      }));
    }

    table.appendChild(el('tbody', {
      children: (block.rows || []).map(function (row) {
        return el('tr', {
          children: row.map(function (cell) { return el('td', { html: inline(cell) }); })
        });
      })
    }));

    scroller.appendChild(table);
    wrap.appendChild(scroller);
    if (block.note) { wrap.appendChild(el('p', { className: 'data-table__note', html: inline(block.note) })); }
    return wrap;
  }

  /**
   * Dibuja un bloque desplegable con el procedimiento paso a paso.
   * Usarlo no cuenta como error: es una ayuda, no una pista penalizada.
   * @param {Object} block - Bloque con title y lineas del procedimiento.
   * @returns {HTMLElement} Bloque desplegable.
   */
  function renderSteps(block) {
    var box = el('details', { className: 'steps' });
    box.appendChild(el('summary', {
      className: 'steps__summary',
      html: ICONS.compass + '<span>' + escapeHtml(block.title || 'Ver el procedimiento') + '</span>'
    }));
    var body = el('div', { className: 'steps__body' });
    body.appendChild(el('ol', {
      className: 'prose__steps',
      children: (block.lines || []).map(function (line) { return el('li', { html: inline(line) }); })
    }));
    if (block.note) { body.appendChild(el('p', { html: inline(block.note) })); }
    box.appendChild(body);
    return box;
  }

  /**
   * Dibuja una lista de enlaces externos, que siempre abren en pestana nueva.
   * @param {Object} block - Bloque con title e items {label, href, note}.
   * @returns {HTMLElement} Lista de enlaces.
   */
  function renderLinks(block) {
    var wrap = el('div', { className: 'links' });
    wrap.appendChild(el('h4', { className: 'links__title', text: block.title || 'Para ver y leer más' }));
    wrap.appendChild(el('ul', {
      className: 'links__list',
      children: (block.items || []).map(function (item) {
        var link = el('a', {
          className: 'links__link',
          attrs: { href: item.href, target: '_blank', rel: 'noopener noreferrer' },
          html: '<span>' + escapeHtml(item.label) + '</span>' + ICONS.arrow
        });
        var row = el('li', { children: [link] });
        if (item.note) { row.appendChild(el('span', { className: 'links__note', text: item.note })); }
        return row;
      })
    }));
    return wrap;
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
   * @param {Object} block - Bloque con title, parrafos e items.
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
    if ((block.items || []).length) {
      body.appendChild(el('ul', {
        children: block.items.map(function (text) { return el('li', { html: inline(text) }); })
      }));
    }
    box.appendChild(body);
    return box;
  }

  /**
   * Dibuja una consigna para resolver en el cuaderno. El sitio no recoge la
   * respuesta: el estudiante escribe en su cuaderno y marca que ya lo hizo.
   * @param {Object} block - Bloque con intro, items, clave opcional y optOut.
   * @param {Object} ctx - Contexto con areaId, unit, lesson, index, grades y onSolved.
   * @returns {HTMLElement} Bloque de consigna de cuaderno.
   */
  function renderNotebook(block, ctx) {
    var key = blockKey(block, ctx);
    var section = el('section', { className: 'notebook' });

    section.appendChild(el('p', {
      className: 'notebook__tag',
      html: ICONS.pencil + '<span>En tu cuaderno</span>'
    }));

    if (block.title) { section.appendChild(el('h4', { className: 'notebook__title', text: block.title })); }
    if (block.intro) { section.appendChild(el('p', { className: 'notebook__intro', html: inline(block.intro) })); }

    if ((block.items || []).length) {
      section.appendChild(el('ol', {
        className: 'notebook__items',
        children: block.items.map(function (item) { return el('li', { html: inline(item) }); })
      }));
    }

    var status = el('p', {
      className: 'notebook__status',
      attrs: { role: 'status', 'aria-live': 'polite' }
    });

    var keyBox = null;
    if ((block.key || []).length) {
      keyBox = el('div', { className: 'notebook__key', attrs: { hidden: 'hidden' } });
      keyBox.appendChild(el('p', { className: 'notebook__key-title', text: block.keyTitle || 'Una respuesta posible sería…' }));
      keyBox.appendChild(el('ul', {
        children: block.key.map(function (item) { return el('li', { html: inline(item) }); })
      }));
    }

    /**
     * Marca la consigna como hecha y muestra el acuse correspondiente.
     * @param {string} message - Mensaje de acuse para el estudiante.
     * @returns {void}
     */
    function complete(message) {
      var isNew = Progress.markDone(ctx.areaId, key);
      status.textContent = message;
      status.className = 'notebook__status is-done';
      if (keyBox) { keyBox.hidden = false; }
      if (isNew) {
        ctx.onSolved();
        Guide.toast(ctx.grades === false ? 'Anotado' : 'Listo', '✍️');
      }
    }

    var done = el('button', {
      className: 'btn btn--primary btn--sm',
      attrs: { type: 'button' },
      text: block.doneLabel || 'Ya lo escribí'
    });
    done.addEventListener('click', function () {
      complete(pick(ctx.grades === false ? WARM : PLAIN));
    });

    var actions = el('div', { className: 'activity__actions', children: [done] });

    if (block.optOut) {
      var skip = el('button', {
        className: 'btn btn--ghost btn--sm',
        attrs: { type: 'button' },
        text: 'Prefiero no responder'
      });
      skip.addEventListener('click', function () {
        complete('Está bien. Puedes volver cuando quieras.');
      });
      actions.appendChild(skip);
    }

    actions.appendChild(status);
    section.appendChild(actions);
    if (keyBox) { section.appendChild(keyBox); }

    if (Progress.isSolved(ctx.areaId, key)) {
      status.textContent = 'Ya marcaste esta parte como hecha.';
      status.className = 'notebook__status is-done';
      if (keyBox) { keyBox.hidden = false; }
    }

    return section;
  }

  /**
   * Dibuja una lista de casillas que se guardan en el dispositivo.
   * No tiene puntaje ni penaliza los dias sin marcar.
   * @param {Object} block - Bloque con title, intro e items.
   * @param {Object} ctx - Contexto con areaId, unit, lesson, index y onSolved.
   * @returns {HTMLElement} Bloque de checklist.
   */
  function renderChecklist(block, ctx) {
    var key = blockKey(block, ctx);
    var saved = Progress.getData(ctx.areaId, key) || {};
    var section = el('section', { className: 'checklist' });

    if (block.title) { section.appendChild(el('h4', { className: 'checklist__title', text: block.title })); }
    if (block.intro) { section.appendChild(el('p', { className: 'checklist__intro', html: inline(block.intro) })); }

    var list = el('div', { className: 'checklist__items' });

    (block.items || []).forEach(function (item, index) {
      var itemId = 'chk-' + key.replace(/[^a-zA-Z0-9]/g, '-') + '-' + index;
      var row = el('label', { className: 'checklist__item', attrs: { for: itemId } });
      var box = el('input', { attrs: { type: 'checkbox', id: itemId } });
      box.checked = Boolean(saved[index]);
      box.addEventListener('change', function () {
        saved[index] = box.checked;
        Progress.saveData(ctx.areaId, key, saved);
        row.classList.toggle('is-checked', box.checked);
        if (box.checked && Progress.markDone(ctx.areaId, key)) { ctx.onSolved(); }
      });
      if (box.checked) { row.classList.add('is-checked'); }
      row.appendChild(box);
      row.appendChild(el('span', { text: item }));
      list.appendChild(row);
    });

    section.appendChild(list);
    section.appendChild(el('p', {
      className: 'checklist__note',
      text: block.note || 'Se guarda en este dispositivo. No hay puntaje ni penalización por los días en blanco.'
    }));
    return section;
  }

  /**
   * Dibuja la guia animada de respiracion cuadrada. Sin sonido y respetando
   * la preferencia de movimiento reducido del sistema.
   * @param {Object} block - Bloque con title, cycles y texto de cierre.
   * @param {Object} ctx - Contexto con areaId, unit, lesson, index y onSolved.
   * @returns {HTMLElement} Widget de respiracion.
   */
  function renderBreathing(block, ctx) {
    var key = blockKey(block, ctx);
    var PHASES = [
      { label: 'TOMA AIRE', hint: 'por la nariz' },
      { label: 'GUARDA', hint: 'sin soltar' },
      { label: 'SUELTA', hint: 'por la boca' },
      { label: 'ESPERA', hint: 'sin aire' }
    ];
    var SECONDS = 4;
    var totalCycles = Number(block.cycles) || 4;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var section = el('section', { className: 'breathing' });
    section.appendChild(el('h4', { className: 'breathing__title', text: block.title || 'Respiración cuadrada' }));

    var stage = el('div', { className: 'breathing__stage' });
    stage.innerHTML =
      '<svg class="breathing__svg" viewBox="0 0 200 200" role="img" aria-hidden="true" focusable="false">' +
      '<rect class="breathing__path" x="30" y="30" width="140" height="140" rx="10"/>' +
      '<circle class="breathing__dot" cx="30" cy="30" r="9"/>' +
      '</svg>' +
      '<div class="breathing__readout">' +
      '<p class="breathing__phase">Listo para empezar</p>' +
      '<p class="breathing__count" aria-hidden="true">4</p>' +
      '<p class="breathing__hint">Dibuja un cuadrado en el aire con el dedo.</p>' +
      '</div>';
    section.appendChild(stage);

    var dot = stage.querySelector('.breathing__dot');
    var phaseText = stage.querySelector('.breathing__phase');
    var countText = stage.querySelector('.breathing__count');
    var hintText = stage.querySelector('.breathing__hint');
    var live = el('p', { className: 'visually-hidden', attrs: { role: 'status', 'aria-live': 'polite' } });
    section.appendChild(live);

    var startedAt = 0;
    var timer = null;
    var frame = null;
    var lastPhase = -1;

    /**
     * Coloca el punto luminoso sobre el lado del cuadrado que corresponde.
     * @param {number} phase - Indice del lado actual (0 a 3).
     * @param {number} ratio - Avance dentro del lado, de 0 a 1.
     * @returns {void}
     */
    function moveDot(phase, ratio) {
      var span = 140 * ratio;
      var positions = [
        [30 + span, 30],
        [170, 30 + span],
        [170 - span, 170],
        [30, 170 - span]
      ];
      dot.setAttribute('cx', String(positions[phase][0]));
      dot.setAttribute('cy', String(positions[phase][1]));
    }

    /**
     * Detiene la practica y deja el widget listo para volver a empezar.
     * @param {boolean} finished - true si se completaron todos los ciclos.
     * @returns {void}
     */
    function stop(finished) {
      if (timer) { clearInterval(timer); timer = null; }
      if (frame) { cancelAnimationFrame(frame); frame = null; }
      toggle.textContent = 'Empezar';
      section.classList.remove('is-running');
      if (finished) {
        phaseText.textContent = '¿Cómo te sientes ahora?';
        countText.textContent = '';
        hintText.textContent = block.closing || 'Si quieres, repítelo otra vez más tarde.';
        live.textContent = 'Práctica terminada.';
        if (Progress.markDone(ctx.areaId, key)) {
          ctx.onSolved();
          Guide.toast('Respiración practicada', '🌬️');
        }
      } else {
        phaseText.textContent = 'Listo para empezar';
        countText.textContent = String(SECONDS);
        hintText.textContent = 'Dibuja un cuadrado en el aire con el dedo.';
      }
    }

    /**
     * Actualiza el texto y el punto segun el tiempo transcurrido.
     * @returns {void}
     */
    function tick() {
      var elapsed = (Date.now() - startedAt) / 1000;
      var totalSeconds = totalCycles * PHASES.length * SECONDS;
      if (elapsed >= totalSeconds) { stop(true); return; }

      var phase = Math.floor(elapsed / SECONDS) % PHASES.length;
      var ratio = (elapsed % SECONDS) / SECONDS;
      var remaining = SECONDS - Math.floor(elapsed % SECONDS);

      if (phase !== lastPhase) {
        lastPhase = phase;
        phaseText.textContent = PHASES[phase].label;
        hintText.textContent = PHASES[phase].hint;
        live.textContent = PHASES[phase].label + ', ' + PHASES[phase].hint;
      }
      countText.textContent = String(remaining);
      if (!reduced) { moveDot(phase, ratio); }
    }

    /**
     * Mantiene el punto en movimiento suave mientras dura la practica.
     * @returns {void}
     */
    function animate() {
      tick();
      if (timer) { frame = requestAnimationFrame(animate); }
    }

    var toggle = el('button', {
      className: 'btn btn--primary btn--sm',
      attrs: { type: 'button' },
      text: 'Empezar'
    });

    toggle.addEventListener('click', function () {
      if (timer) { stop(false); return; }
      startedAt = Date.now();
      lastPhase = -1;
      section.classList.add('is-running');
      toggle.textContent = 'Parar';
      timer = setInterval(tick, 250);
      if (!reduced) { frame = requestAnimationFrame(animate); }
      tick();
    });

    section.appendChild(el('div', { className: 'activity__actions', children: [toggle] }));
    section.appendChild(el('p', {
      className: 'breathing__note',
      text: 'Repítelo ' + totalCycles + ' veces. Practícalo cuando estés tranquilo, para que te salga fácil el día que lo necesites.'
    }));

    if (Progress.isSolved(ctx.areaId, key)) {
      live.textContent = 'Ya practicaste esta respiración.';
    }

    return section;
  }

  /**
   * Dibuja una actividad interactiva y registra su resultado en el avance.
   * @param {Object} block - Bloque que contiene la definicion de la actividad.
   * @param {Object} ctx - Contexto con areaId, unit, lesson, index, grades y onSolved.
   * @returns {HTMLElement} Actividad lista para responder.
   */
  function renderActivity(block, ctx) {
    var activity = block.activity || {};
    var key = Progress.activityKey(ctx.unit, ctx.lesson, activity.id || ('a' + ctx.index));
    return Activities.render(activity, {
      solved: Progress.isSolved(ctx.areaId, key),
      grades: ctx.grades,
      areaId: ctx.areaId,
      storageKey: key,
      onResult: function (ok) {
        if (Progress.record(ctx.areaId, key, ok)) {
          ctx.onSolved();
          Guide.toast(ctx.grades === false ? 'Anotado' : 'Actividad resuelta', ctx.grades === false ? '💬' : '⭐');
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
    table: renderTable,
    steps: renderSteps,
    links: renderLinks,
    figure: renderFigure,
    adult: renderAdult,
    notebook: renderNotebook,
    checklist: renderChecklist,
    breathing: renderBreathing,
    activity: renderActivity
  };

  global.Blocks = {
    TYPES: Object.keys(RENDERERS),
    inline: inline,

    /**
     * Dibuja un bloque de contenido segun su tipo.
     * @param {Object} block - Bloque definido en el archivo de contenido.
     * @param {Object} ctx - Contexto con areaId, unit, lesson, index, grades y onSolved.
     * @returns {HTMLElement|null} Elemento del bloque, o null si el tipo no existe.
     */
    render: function (block, ctx) {
      var build = RENDERERS[block.type];
      return build ? build(block, ctx) : null;
    }
  };
}(window));

/* ==========================================================================
   activities.js — Motor de actividades interactivas.
   Convierte un objeto de actividad (definido en /data) en un bloque de HTML
   que el estudiante puede responder, con revision inmediata.
   ========================================================================== */

(function (global) {
  'use strict';

  var el = global.Guide.el;
  var escapeHtml = global.Guide.escapeHtml;
  var shuffle = global.Guide.shuffle;
  var normalize = global.Guide.normalize;
  var ICONS = global.Guide.ICONS;

  /** Etiqueta visible segun el tipo de actividad. */
  var TAGS = {
    choice: 'Elige',
    truefalse: 'Verdadero o falso',
    fill: 'Completa',
    match: 'Une las parejas',
    order: 'Ordena'
  };

  /** Mensajes de animo que se rotan al acertar. */
  var CHEERS = [
    'Muy bien, lo lograste.',
    'Correcto. Vas por buen camino.',
    'Excelente trabajo.',
    'Esa es. Sigue así.',
    'Perfecto, entendiste la idea.'
  ];

  /** Mensajes amables cuando la respuesta no es correcta. */
  var RETRIES = [
    'Todavía no. Léelo otra vez con calma.',
    'Casi. Inténtalo de nuevo.',
    'No es esa. Piensa un momento y vuelve a probar.'
  ];

  /**
   * Elige un mensaje al azar de una lista.
   * @param {Array<string>} list - Lista de mensajes disponibles.
   * @returns {string} Un mensaje de la lista.
   */
  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  /**
   * Crea el bloque de retroalimentacion, oculto por defecto.
   * @returns {HTMLElement} Contenedor donde se escribe el resultado del intento.
   */
  function createFeedback() {
    var node = el('div', {
      className: 'feedback',
      attrs: { hidden: 'hidden', role: 'status', 'aria-live': 'polite' }
    });
    return node;
  }

  /**
   * Muestra un mensaje de acierto o de error dentro de una actividad.
   * @param {HTMLElement} node - Contenedor de retroalimentacion.
   * @param {boolean} ok - true si la respuesta fue correcta.
   * @param {string} message - Texto a mostrar al estudiante.
   * @returns {void}
   */
  function showFeedback(node, ok, message) {
    node.className = 'feedback ' + (ok ? 'feedback--ok' : 'feedback--no');
    node.innerHTML = '<span class="feedback__icon" aria-hidden="true">' + (ok ? '&#10003;' : '!') + '</span>' +
                     '<span>' + escapeHtml(message) + '</span>';
    node.hidden = false;
  }

  /**
   * Construye la cabecera comun de toda actividad.
   * @param {Object} activity - Definicion de la actividad.
   * @returns {HTMLElement} Cabecera con etiqueta de tipo y enunciado.
   */
  function buildHead(activity) {
    var head = el('div', { className: 'activity__head' });
    head.appendChild(el('span', { className: 'activity__tag', text: TAGS[activity.kind] || 'Actividad' }));
    if (activity.question) {
      head.appendChild(el('p', { className: 'activity__question', text: activity.question }));
    }
    return head;
  }

  /**
   * Arma una actividad de opcion multiple o de verdadero/falso.
   * @param {Object} activity - Definicion con opciones y respuesta correcta.
   * @param {Object} ctx - Contexto con feedback, finish y estado inicial.
   * @returns {HTMLElement} Contenedor con los botones de opcion.
   */
  function buildChoice(activity, ctx) {
    var options = activity.kind === 'truefalse'
      ? ['Verdadero', 'Falso']
      : (activity.options || []);
    var answerIndex = activity.kind === 'truefalse'
      ? (activity.answer === true || activity.answer === 'true' ? 0 : 1)
      : Number(activity.answer);

    var list = el('div', {
      className: 'options' + (activity.kind === 'truefalse' ? ' options--grid' : '')
    });
    var buttons = [];

    options.forEach(function (label, index) {
      var button = el('button', {
        className: 'option',
        attrs: { type: 'button' },
        html: '<span class="option__key" aria-hidden="true">' +
              String.fromCharCode(65 + index) + '</span>' +
              '<span>' + escapeHtml(label) + '</span>'
      });
      button.addEventListener('click', function () {
        var correct = index === answerIndex;
        buttons.forEach(function (other) { other.classList.remove('is-wrong'); });
        if (correct) {
          button.classList.add('is-correct');
          buttons.forEach(function (other) { other.disabled = true; });
          ctx.finish(true, activity.explain || pick(CHEERS));
        } else {
          button.classList.add('is-wrong');
          ctx.finish(false, activity.hint || pick(RETRIES));
        }
      });
      buttons.push(button);
      list.appendChild(button);
    });

    /**
     * Deja la actividad en estado resuelto, marcando la opcion correcta.
     * @returns {void}
     */
    ctx.markSolved = function () {
      buttons.forEach(function (button, index) {
        button.disabled = true;
        button.classList.toggle('is-correct', index === answerIndex);
      });
    };

    /**
     * Devuelve la actividad a su estado inicial para volver a responderla.
     * @returns {void}
     */
    ctx.reset = function () {
      buttons.forEach(function (button) {
        button.disabled = false;
        button.classList.remove('is-correct', 'is-wrong');
      });
    };

    return list;
  }

  /**
   * Arma una actividad de completar espacios en blanco.
   * El texto usa la sintaxis: "El sol {{sale}} temprano" y admite
   * respuestas alternativas separadas por barra: {{sale|aparece}}.
   * @param {Object} activity - Definicion con el texto y sus huecos.
   * @param {Object} ctx - Contexto con feedback, finish y estado inicial.
   * @returns {HTMLElement} Contenedor con el texto y los campos a completar.
   */
  function buildFill(activity, ctx) {
    var wrap = el('p', { className: 'fill' });
    var inputs = [];
    var parts = String(activity.text || '').split(/(\{\{[^}]*\}\})/);

    parts.forEach(function (part) {
      if (!part) { return; }
      var match = part.match(/^\{\{([^}]*)\}\}$/);
      if (!match) {
        wrap.appendChild(document.createTextNode(part));
        return;
      }
      var answers = match[1].split('|').map(function (value) { return value.trim(); });
      var input = el('input', {
        className: 'fill__blank',
        attrs: {
          type: 'text',
          autocomplete: 'off',
          spellcheck: 'false',
          'aria-label': 'Espacio para completar',
          size: String(Math.max(6, answers[0].length + 2))
        }
      });
      input.dataset.answers = answers.join('|');
      inputs.push(input);
      wrap.appendChild(input);
    });

    var check = el('button', { className: 'btn btn--primary btn--sm', attrs: { type: 'button' }, text: 'Comprobar' });
    check.addEventListener('click', function () {
      var allCorrect = true;
      inputs.forEach(function (input) {
        var answers = input.dataset.answers.split('|').map(normalize);
        var ok = answers.indexOf(normalize(input.value)) !== -1;
        input.classList.toggle('is-correct', ok);
        input.classList.toggle('is-wrong', !ok);
        if (!ok) { allCorrect = false; }
      });
      if (allCorrect) {
        inputs.forEach(function (input) { input.disabled = true; });
        ctx.finish(true, activity.explain || pick(CHEERS));
      } else {
        ctx.finish(false, activity.hint || 'Revisa las palabras marcadas en rojo.');
      }
    });

    ctx.actions.push(check);

    /**
     * Muestra la respuesta correcta cuando la actividad ya estaba resuelta.
     * @returns {void}
     */
    ctx.markSolved = function () {
      inputs.forEach(function (input) {
        input.value = input.dataset.answers.split('|')[0];
        input.disabled = true;
        input.classList.add('is-correct');
      });
      check.disabled = true;
    };

    /**
     * Limpia los campos para volver a intentar la actividad.
     * @returns {void}
     */
    ctx.reset = function () {
      inputs.forEach(function (input) {
        input.value = '';
        input.disabled = false;
        input.classList.remove('is-correct', 'is-wrong');
      });
      check.disabled = false;
    };

    return wrap;
  }

  /**
   * Arma una actividad de unir parejas por clic (izquierda y luego derecha).
   * @param {Object} activity - Definicion con la lista de parejas.
   * @param {Object} ctx - Contexto con feedback, finish y estado inicial.
   * @returns {HTMLElement} Tablero de dos columnas para emparejar.
   */
  function buildMatch(activity, ctx) {
    var pairs = activity.pairs || [];
    var board = el('div', { className: 'match' });
    var leftCol = el('div', { className: 'match__col' });
    var rightCol = el('div', { className: 'match__col' });

    leftCol.appendChild(el('p', { className: 'match__label', text: activity.leftLabel || 'Columna A' }));
    rightCol.appendChild(el('p', { className: 'match__label', text: activity.rightLabel || 'Columna B' }));

    var selected = null;
    var solvedCount = 0;
    var leftButtons = [];
    var rightButtons = [];

    /**
     * Marca una pareja como resuelta y avisa cuando ya no quedan pendientes.
     * @param {HTMLElement} leftButton - Boton de la columna izquierda.
     * @param {HTMLElement} rightButton - Boton de la columna derecha.
     * @returns {void}
     */
    function lockPair(leftButton, rightButton) {
      [leftButton, rightButton].forEach(function (button) {
        button.classList.remove('is-active', 'is-wrong');
        button.classList.add('is-paired');
        button.disabled = true;
      });
      solvedCount += 1;
      if (solvedCount === pairs.length) {
        ctx.finish(true, activity.explain || 'Uniste todas las parejas.');
      }
    }

    pairs.forEach(function (pair, index) {
      var leftButton = el('button', {
        className: 'match__item',
        attrs: { type: 'button' },
        text: pair.left
      });
      leftButton.dataset.pair = String(index);
      leftButton.addEventListener('click', function () {
        leftButtons.forEach(function (other) { other.classList.remove('is-active'); });
        leftButton.classList.add('is-active');
        selected = leftButton;
      });
      leftButtons.push(leftButton);
      leftCol.appendChild(leftButton);
    });

    shuffle(pairs.map(function (pair, index) { return { pair: pair, index: index }; })).forEach(function (entry) {
      var rightButton = el('button', {
        className: 'match__item',
        attrs: { type: 'button' },
        text: entry.pair.right
      });
      rightButton.dataset.pair = String(entry.index);
      rightButton.addEventListener('click', function () {
        if (!selected) {
          ctx.showHint('Primero elige una palabra de la columna A.');
          return;
        }
        if (selected.dataset.pair === rightButton.dataset.pair) {
          lockPair(selected, rightButton);
          selected = null;
        } else {
          rightButton.classList.add('is-wrong');
          setTimeout(function () { rightButton.classList.remove('is-wrong'); }, 700);
          ctx.finish(false, activity.hint || 'Esa pareja no coincide. Prueba otra.');
        }
      });
      rightButtons.push(rightButton);
      rightCol.appendChild(rightButton);
    });

    board.appendChild(leftCol);
    board.appendChild(rightCol);

    /**
     * Deja todas las parejas unidas cuando la actividad ya estaba resuelta.
     * @returns {void}
     */
    ctx.markSolved = function () {
      leftButtons.concat(rightButtons).forEach(function (button) {
        button.classList.add('is-paired');
        button.classList.remove('is-active', 'is-wrong');
        button.disabled = true;
      });
    };

    /**
     * Reinicia el tablero para volver a emparejar desde cero.
     * @returns {void}
     */
    ctx.reset = function () {
      solvedCount = 0;
      selected = null;
      leftButtons.concat(rightButtons).forEach(function (button) {
        button.classList.remove('is-paired', 'is-active', 'is-wrong');
        button.disabled = false;
      });
    };

    return board;
  }

  /**
   * Arma una actividad de ordenar elementos con botones de subir y bajar.
   * @param {Object} activity - Definicion con los elementos en su orden correcto.
   * @param {Object} ctx - Contexto con feedback, finish y estado inicial.
   * @returns {HTMLElement} Lista reordenable.
   */
  function buildOrder(activity, ctx) {
    var correct = activity.items || [];
    var list = el('ol', { className: 'order' });

    /**
     * Vuelve a pintar la lista respetando el orden actual guardado en el DOM.
     * @param {Array<string>} items - Elementos en el orden que se debe mostrar.
     * @returns {void}
     */
    function paint(items) {
      list.innerHTML = '';
      items.forEach(function (text, index) {
        var row = el('li', { className: 'order__item' });
        row.appendChild(el('span', { className: 'order__pos', text: String(index + 1) }));
        row.appendChild(el('span', { text: text }));

        var controls = el('div', { className: 'order__controls' });
        var up = el('button', {
          className: 'order__move',
          attrs: { type: 'button', 'aria-label': 'Subir: ' + text },
          html: ICONS.up
        });
        var down = el('button', {
          className: 'order__move',
          attrs: { type: 'button', 'aria-label': 'Bajar: ' + text },
          html: ICONS.down
        });
        up.disabled = index === 0;
        down.disabled = index === items.length - 1;

        up.addEventListener('click', function () {
          var next = items.slice();
          next[index - 1] = items[index];
          next[index] = items[index - 1];
          paint(next);
        });
        down.addEventListener('click', function () {
          var next = items.slice();
          next[index + 1] = items[index];
          next[index] = items[index + 1];
          paint(next);
        });

        controls.appendChild(up);
        controls.appendChild(down);
        row.appendChild(controls);
        list.appendChild(row);
      });
      list.dataset.current = JSON.stringify(items);
    }

    var start = shuffle(correct);
    if (correct.length > 1 && start.join('|') === correct.join('|')) { start = start.reverse(); }
    paint(start);

    var check = el('button', { className: 'btn btn--primary btn--sm', attrs: { type: 'button' }, text: 'Comprobar' });
    check.addEventListener('click', function () {
      var current = JSON.parse(list.dataset.current);
      var allCorrect = true;
      Array.prototype.forEach.call(list.children, function (row, index) {
        var ok = current[index] === correct[index];
        row.classList.toggle('is-correct', ok);
        row.classList.toggle('is-wrong', !ok);
        if (!ok) { allCorrect = false; }
      });
      if (allCorrect) {
        Array.prototype.forEach.call(list.querySelectorAll('.order__move'), function (button) { button.disabled = true; });
        ctx.finish(true, activity.explain || 'El orden es correcto.');
      } else {
        ctx.finish(false, activity.hint || 'Algunos pasos están fuera de lugar. Mueve las tarjetas rojas.');
      }
    });

    ctx.actions.push(check);

    /**
     * Muestra el orden correcto cuando la actividad ya estaba resuelta.
     * @returns {void}
     */
    ctx.markSolved = function () {
      paint(correct);
      Array.prototype.forEach.call(list.children, function (row) { row.classList.add('is-correct'); });
      Array.prototype.forEach.call(list.querySelectorAll('.order__move'), function (button) { button.disabled = true; });
      check.disabled = true;
    };

    /**
     * Vuelve a desordenar la lista para intentarlo otra vez.
     * @returns {void}
     */
    ctx.reset = function () {
      paint(shuffle(correct));
      check.disabled = false;
    };

    return list;
  }

  /** Constructores disponibles segun el tipo declarado en la actividad. */
  var BUILDERS = {
    choice: buildChoice,
    truefalse: buildChoice,
    fill: buildFill,
    match: buildMatch,
    order: buildOrder
  };

  var Activities = {
    /**
     * Construye el bloque HTML completo de una actividad.
     * @param {Object} activity - Definicion de la actividad tomada de /data.
     * @param {Object} [options] - { solved: boolean, onResult: function(boolean) }.
     * @returns {HTMLElement} Seccion lista para insertar en la leccion.
     */
    render: function (activity, options) {
      var opts = options || {};
      var section = el('section', { className: 'activity' });
      var feedback = createFeedback();
      var actions = el('div', { className: 'activity__actions' });
      var retry = el('button', {
        className: 'btn btn--ghost btn--sm',
        attrs: { type: 'button' },
        text: 'Intentar de nuevo'
      });
      retry.hidden = true;

      var ctx = {
        actions: [],
        markSolved: function () {},
        reset: function () {},

        /**
         * Muestra una pista sin contar el intento como respuesta.
         * @param {string} message - Texto de la pista.
         * @returns {void}
         */
        showHint: function (message) { showFeedback(feedback, false, message); },

        /**
         * Cierra un intento: pinta la retroalimentacion y avisa al llamador.
         * @param {boolean} ok - true si la respuesta fue correcta.
         * @param {string} message - Mensaje para el estudiante.
         * @returns {void}
         */
        finish: function (ok, message) {
          showFeedback(feedback, ok, message);
          retry.hidden = !ok;
          if (typeof opts.onResult === 'function') { opts.onResult(ok); }
        }
      };

      var builder = BUILDERS[activity.kind];
      if (!builder) {
        section.appendChild(el('p', { text: 'Tipo de actividad no reconocido: ' + activity.kind }));
        return section;
      }

      section.appendChild(buildHead(activity));
      section.appendChild(builder(activity, ctx));

      ctx.actions.forEach(function (button) { actions.appendChild(button); });
      actions.appendChild(retry);
      retry.addEventListener('click', function () {
        ctx.reset();
        feedback.hidden = true;
        retry.hidden = true;
      });

      section.appendChild(feedback);
      if (actions.children.length) { section.appendChild(actions); }

      if (opts.solved) {
        ctx.markSolved();
        showFeedback(feedback, true, 'Ya resolviste esta actividad.');
        retry.hidden = false;
      }

      return section;
    }
  };

  global.Activities = Activities;
}(window));

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
  var answerMatches = global.Guide.answerMatches;
  var formatNumber = global.Guide.formatNumber;
  var randomInt = global.Guide.randomInt;
  var ICONS = global.Guide.ICONS;

  /** Etiqueta visible segun el tipo de actividad. */
  var TAGS = {
    choice: 'Elige',
    truefalse: 'Verdadero o falso',
    fill: 'Completa',
    match: 'Une las parejas',
    order: 'Ordena',
    practice: 'Practica',
    mood: 'Cómo me siento',
    classify: 'Clasifica',
    numericPair: 'Divide',
    numeric: 'Resuelve'
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
   * @param {string} tone - ok, no o soft (soft nunca marca acierto ni error).
   * @param {string} message - Texto a mostrar al estudiante.
   * @returns {void}
   */
  function showFeedback(node, tone, message) {
    var icons = { ok: '&#10003;', no: '!', soft: '&#9679;' };
    node.className = 'feedback feedback--' + tone;
    node.innerHTML = '<span class="feedback__icon" aria-hidden="true">' + icons[tone] + '</span>' +
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
        var typed = input.value;
        var ok = input.dataset.answers.split('|').some(function (answer) {
          return answerMatches(typed, answer);
        });
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

  /**
   * Arma el termometro del dia: cinco opciones sin respuesta correcta.
   * Guarda el valor por fecha y muestra el historial sin interpretarlo.
   * @param {Object} activity - Definicion con las opciones del termometro.
   * @param {Object} ctx - Contexto con finish, areaId y storageKey.
   * @returns {HTMLElement} Contenedor con las opciones y el historial.
   */
  function buildMood(activity, ctx) {
    var options = activity.options || [];
    var wrap = el('div', { className: 'mood' });
    var scale = el('div', { className: 'mood__scale' });
    var history = el('div', { className: 'mood__history' });
    var buttons = [];

    /**
     * Devuelve la fecha de hoy en formato AAAA-MM-DD.
     * @returns {string} Fecha de hoy.
     */
    function today() {
      var now = new Date();
      return now.getFullYear() + '-' +
             String(now.getMonth() + 1).padStart(2, '0') + '-' +
             String(now.getDate()).padStart(2, '0');
    }

    /**
     * Vuelve a pintar el historial de los ultimos dias registrados.
     * @returns {void}
     */
    function paintHistory() {
      var log = ctx.readData() || [];
      history.innerHTML = '';
      if (!log.length) { return; }
      history.appendChild(el('p', { className: 'mood__history-title', text: 'Así te has sentido:' }));
      var strip = el('div', { className: 'mood__strip' });
      log.slice(-7).forEach(function (entry) {
        var dot = el('span', {
          className: 'mood__dot',
          attrs: { title: entry.date + ': ' + (options[entry.value - 1] || entry.value) }
        });
        dot.style.opacity = String(0.25 + (entry.value / options.length) * 0.75);
        strip.appendChild(dot);
      });
      history.appendChild(strip);
    }

    options.forEach(function (label, index) {
      var button = el('button', {
        className: 'mood__option',
        attrs: { type: 'button' },
        html: '<span class="mood__level" aria-hidden="true">' + (index + 1) + '</span>' +
              '<span>' + escapeHtml(label) + '</span>'
      });
      button.addEventListener('click', function () {
        buttons.forEach(function (other) { other.classList.remove('is-chosen'); });
        button.classList.add('is-chosen');

        var log = ctx.readData() || [];
        var date = today();
        var existing = log.filter(function (entry) { return entry.date === date; })[0];
        if (existing) { existing.value = index + 1; } else { log.push({ date: date, value: index + 1 }); }
        ctx.writeData(log);
        paintHistory();

        ctx.finish(true, activity.explain || 'Gracias por contarlo.');
      });
      buttons.push(button);
      scale.appendChild(button);
    });

    wrap.appendChild(scale);
    wrap.appendChild(history);
    paintHistory();

    /**
     * Deja marcada la ultima eleccion cuando la actividad ya se respondio.
     * @returns {void}
     */
    ctx.markSolved = function () {
      var log = ctx.readData() || [];
      var last = log[log.length - 1];
      if (last && buttons[last.value - 1]) { buttons[last.value - 1].classList.add('is-chosen'); }
    };

    /**
     * Permite volver a elegir sin borrar el historial.
     * @returns {void}
     */
    ctx.reset = function () {
      buttons.forEach(function (button) { button.classList.remove('is-chosen'); });
    };

    return wrap;
  }

  /**
   * Arma una actividad de clasificar tarjetas en dos o mas contenedores.
   * Con free: true no hay respuesta correcta. Con soft: true se sugiere
   * repensar la tarjeta mal ubicada, pero nunca se marca como error.
   * @param {Object} activity - Definicion con groups y cards.
   * @param {Object} ctx - Contexto con feedback, finish y estado inicial.
   * @returns {HTMLElement} Tablero de clasificacion.
   */
  function buildClassify(activity, ctx) {
    var groups = activity.groups || [];
    var cards = activity.cards || [];
    var board = el('div', { className: 'classify' });
    var pool = el('div', { className: 'classify__pool' });
    var zones = el('div', { className: 'classify__zones' });
    var selected = null;
    var placed = 0;
    var cardButtons = [];
    var zoneNodes = [];

    pool.appendChild(el('p', { className: 'classify__label', text: 'Toca una tarjeta y luego su lugar' }));

    /**
     * Marca visualmente la tarjeta que el estudiante tiene seleccionada.
     * @param {HTMLElement|null} button - Tarjeta elegida, o null para limpiar.
     * @returns {void}
     */
    function select(button) {
      cardButtons.forEach(function (other) { other.classList.remove('is-active'); });
      selected = button;
      if (button) { button.classList.add('is-active'); }
    }

    shuffle(cards).forEach(function (card) {
      var button = el('button', {
        className: 'classify__card',
        attrs: { type: 'button' },
        text: card.text
      });
      button.dataset.group = String(card.group);
      button.addEventListener('click', function () { select(button); });
      cardButtons.push(button);
      pool.appendChild(button);
    });

    groups.forEach(function (group) {
      var zone = el('div', { className: 'classify__zone' });
      zone.dataset.group = String(group.id);
      if (group.tone) { zone.classList.add('classify__zone--' + group.tone); }
      zone.appendChild(el('p', { className: 'classify__zone-title', text: group.title }));
      var drop = el('div', { className: 'classify__drop' });
      zone.appendChild(drop);

      zone.addEventListener('click', function () {
        if (!selected) {
          ctx.showHint('Primero toca una tarjeta.');
          return;
        }
        var card = selected;
        var belongsHere = card.dataset.group === String(group.id);

        if (activity.soft && !belongsHere) {
          ctx.showHint(activity.hint || 'Piénsalo otra vez: ¿eso lo decides tú?');
          card.classList.add('is-thinking');
          setTimeout(function () { card.classList.remove('is-thinking'); }, 900);
          return;
        }

        card.classList.remove('is-active', 'is-thinking');
        card.classList.add('is-placed');
        card.disabled = true;
        drop.appendChild(card);
        select(null);
        placed += 1;
        if (placed === cardButtons.length) {
          ctx.finish(true, activity.explain || 'Terminaste de organizar las tarjetas.');
        }
      });

      zoneNodes.push({ zone: zone, drop: drop, id: String(group.id) });
      zones.appendChild(zone);
    });

    board.appendChild(pool);
    board.appendChild(zones);

    /**
     * Reparte todas las tarjetas en su lugar cuando ya se resolvio antes.
     * @returns {void}
     */
    ctx.markSolved = function () {
      cardButtons.forEach(function (card) {
        var target = zoneNodes.filter(function (entry) { return entry.id === card.dataset.group; })[0];
        if (!target) { return; }
        card.classList.add('is-placed');
        card.disabled = true;
        target.drop.appendChild(card);
      });
      placed = cardButtons.length;
    };

    /**
     * Devuelve todas las tarjetas al monton inicial.
     * @returns {void}
     */
    ctx.reset = function () {
      placed = 0;
      select(null);
      shuffle(cardButtons).forEach(function (card) {
        card.classList.remove('is-placed', 'is-active', 'is-thinking');
        card.disabled = false;
        pool.appendChild(card);
      });
    };

    return board;
  }

  /**
   * Arma una lista de ejercicios de respuesta corta. Cada renglon puede
   * pedir un numero escrito o una eleccion entre pocas opciones (por ejemplo
   * los signos mayor que, menor que e igual).
   * @param {Object} activity - Definicion con items: [{text, answer, options, unit}].
   * @param {Object} ctx - Contexto con feedback, finish y estado inicial.
   * @returns {HTMLElement} Lista de ejercicios.
   */
  function buildNumeric(activity, ctx) {
    var items = activity.items || [];
    var list = el('div', {
      className: 'numeric' + (activity.layout === 'stacked' ? ' numeric--stacked' : '')
    });
    var rows = [];

    items.forEach(function (item, index) {
      var row = el('div', { className: 'numeric__row' });
      row.appendChild(el('span', {
        className: 'numeric__text',
        html: (items.length > 1 ? '<span class="numeric__num">' + (index + 1) + '</span>' : '') +
              '<span>' + escapeHtml(item.text) + '</span>'
      }));

      var entry = { data: item, node: row, buttons: [], input: null, chosen: null };

      if (item.options) {
        var group = el('div', { className: 'numeric__options' });
        item.options.forEach(function (option) {
          var button = el('button', {
            className: 'numeric__option',
            attrs: { type: 'button', 'aria-label': item.text + ': ' + option },
            text: option
          });
          button.addEventListener('click', function () {
            entry.buttons.forEach(function (other) {
              other.classList.remove('is-chosen', 'is-correct', 'is-wrong');
            });
            button.classList.add('is-chosen');
            entry.chosen = option;
          });
          entry.buttons.push(button);
          group.appendChild(button);
        });
        row.appendChild(group);
      } else {
        entry.input = el('input', {
          className: 'fill__blank',
          attrs: {
            type: 'text',
            inputmode: 'numeric',
          size: '8',
            size: '8',
            autocomplete: 'off',
            'aria-label': 'Respuesta de ' + item.text
          }
        });
        row.appendChild(el('span', { className: 'numeric__answer', children: [
          entry.input,
          item.unit ? el('span', { className: 'numeric__unit', text: item.unit }) : null
        ].filter(Boolean) }));
      }

      rows.push(entry);
      list.appendChild(row);
    });

    var check = el('button', { className: 'btn btn--primary btn--sm', attrs: { type: 'button' }, text: 'Comprobar' });
    check.addEventListener('click', function () {
      var correct = 0;
      rows.forEach(function (row) {
        var ok;
        if (row.input) {
          ok = answerMatches(row.input.value, String(row.data.answer));
          row.input.classList.toggle('is-correct', ok);
          row.input.classList.toggle('is-wrong', !ok);
        } else {
          ok = row.chosen === row.data.answer;
          row.buttons.forEach(function (button) {
            var isChosen = button.textContent === row.chosen;
            button.classList.toggle('is-correct', isChosen && ok);
            button.classList.toggle('is-wrong', isChosen && !ok);
          });
        }
        if (ok) { correct += 1; }
      });

      if (correct === rows.length) {
        ctx.finish(true, activity.explain || 'Todas quedaron bien.');
      } else {
        ctx.finish(false, activity.hint ||
          ('Van ' + correct + ' de ' + rows.length + '. Revisa las que quedaron en rojo.'));
      }
    });

    ctx.actions.push(check);

    /**
     * Escribe las respuestas correctas cuando la actividad ya se resolvio.
     * @returns {void}
     */
    ctx.markSolved = function () {
      rows.forEach(function (row) {
        if (row.input) {
          row.input.value = row.data.answer;
          row.input.disabled = true;
          row.input.classList.add('is-correct');
          return;
        }
        row.buttons.forEach(function (button) {
          button.disabled = true;
          button.classList.toggle('is-correct', button.textContent === String(row.data.answer));
        });
      });
      check.disabled = true;
    };

    /**
     * Limpia la lista para volver a resolverla.
     * @returns {void}
     */
    ctx.reset = function () {
      rows.forEach(function (row) {
        if (row.input) {
          row.input.value = '';
          row.input.disabled = false;
          row.input.classList.remove('is-correct', 'is-wrong');
          return;
        }
        row.chosen = null;
        row.buttons.forEach(function (button) {
          button.disabled = false;
          button.classList.remove('is-chosen', 'is-correct', 'is-wrong');
        });
      });
      check.disabled = false;
    };

    return list;
  }

  /**
   * Arma una division con dos campos: cociente y residuo. Ambos deben coincidir.
   * @param {Object} activity - Definicion con operations: [{text, quotient, remainder}].
   * @param {Object} ctx - Contexto con feedback, finish y estado inicial.
   * @returns {HTMLElement} Lista de divisiones con sus dos campos.
   */
  function buildNumericPair(activity, ctx) {
    var operations = activity.operations || [];
    var list = el('div', { className: 'division' });
    var rows = [];

    operations.forEach(function (operation, index) {
      var row = el('div', { className: 'division__row' });
      row.appendChild(el('span', { className: 'division__text', text: operation.text }));

      var quotient = el('input', {
        className: 'fill__blank',
        attrs: { type: 'text', inputmode: 'numeric', autocomplete: 'off', 'aria-label': 'Cociente de ' + operation.text }
      });
      var remainder = el('input', {
        className: 'fill__blank',
        attrs: { type: 'text', inputmode: 'numeric', autocomplete: 'off', 'aria-label': 'Residuo de ' + operation.text }
      });

      row.appendChild(el('span', { className: 'division__field', children: [
        el('span', { className: 'division__caption', text: 'Cociente' }), quotient
      ] }));
      row.appendChild(el('span', { className: 'division__field', children: [
        el('span', { className: 'division__caption', text: 'Residuo' }), remainder
      ] }));

      rows.push({ node: row, quotient: quotient, remainder: remainder, data: operation, index: index });
      list.appendChild(row);
    });

    var check = el('button', { className: 'btn btn--primary btn--sm', attrs: { type: 'button' }, text: 'Comprobar' });
    check.addEventListener('click', function () {
      var correct = 0;
      rows.forEach(function (row) {
        var okQuotient = answerMatches(row.quotient.value, String(row.data.quotient));
        var okRemainder = answerMatches(row.remainder.value, String(row.data.remainder));
        row.quotient.classList.toggle('is-correct', okQuotient);
        row.quotient.classList.toggle('is-wrong', !okQuotient);
        row.remainder.classList.toggle('is-correct', okRemainder);
        row.remainder.classList.toggle('is-wrong', !okRemainder);
        if (okQuotient && okRemainder) { correct += 1; }
      });
      if (correct === rows.length) {
        ctx.finish(true, activity.explain || 'Todas las divisiones quedaron bien, con su cociente y su residuo.');
      } else {
        ctx.finish(false, 'Van ' + correct + ' de ' + rows.length + '. Recuerda que el residuo siempre es menor que el divisor.');
      }
    });

    ctx.actions.push(check);

    /**
     * Escribe los resultados correctos cuando la actividad ya se resolvio.
     * @returns {void}
     */
    ctx.markSolved = function () {
      rows.forEach(function (row) {
        row.quotient.value = formatNumber(row.data.quotient);
        row.remainder.value = formatNumber(row.data.remainder);
        row.quotient.classList.add('is-correct');
        row.remainder.classList.add('is-correct');
        row.quotient.disabled = true;
        row.remainder.disabled = true;
      });
      check.disabled = true;
    };

    /**
     * Limpia los campos para volver a resolver las divisiones.
     * @returns {void}
     */
    ctx.reset = function () {
      rows.forEach(function (row) {
        row.quotient.value = '';
        row.remainder.value = '';
        row.quotient.disabled = false;
        row.remainder.disabled = false;
        row.quotient.classList.remove('is-correct', 'is-wrong');
        row.remainder.classList.remove('is-correct', 'is-wrong');
      });
      check.disabled = false;
    };

    return list;
  }

  /**
   * Generadores de ejercicios para las rondas de practica.
   * Cada uno devuelve { text, answer } con una operacion distinta.
   */
  var GENERATORS = {
    /**
     * Genera una multiplicacion de la tabla indicada.
     * @param {Object} options - { table } tabla a practicar; si falta, se elige al azar.
     * @returns {{text: string, answer: number}} Operacion y su resultado.
     */
    times: function (options) {
      var table = Number(options.table) || randomInt(2, 9);
      var other = randomInt(1, 10);
      return { text: table + ' × ' + other, answer: table * other };
    },

    /**
     * Genera una division exacta con divisor de una cifra.
     * @param {Object} options - { table } divisor a practicar; si falta, se elige al azar.
     * @returns {{text: string, answer: number}} Operacion y su resultado.
     */
    divide: function (options) {
      var divisor = Number(options.table) || randomInt(2, 9);
      var quotient = randomInt(1, 10);
      return { text: formatNumber(divisor * quotient) + ' ÷ ' + divisor, answer: quotient };
    },

    /**
     * Genera una suma dentro del rango indicado.
     * @param {Object} options - { min, max } rango de los sumandos.
     * @returns {{text: string, answer: number}} Operacion y su resultado.
     */
    plus: function (options) {
      var min = Number(options.min) || 10;
      var max = Number(options.max) || 999;
      var a = randomInt(min, max);
      var b = randomInt(min, max);
      return { text: formatNumber(a) + ' + ' + formatNumber(b), answer: a + b };
    },

    /**
     * Genera una resta sin resultado negativo dentro del rango indicado.
     * @param {Object} options - { min, max } rango del minuendo.
     * @returns {{text: string, answer: number}} Operacion y su resultado.
     */
    minus: function (options) {
      var min = Number(options.min) || 10;
      var max = Number(options.max) || 999;
      var a = randomInt(min, max);
      var b = randomInt(min, a);
      return { text: formatNumber(a) + ' - ' + formatNumber(b), answer: a - b };
    }
  };

  /**
   * Crea una ronda de ejercicios distintos entre si.
   * @param {Object} activity - Definicion con generator, count y options.
   * @returns {Array<{text: string, answer: number}>} Ejercicios de la ronda.
   */
  function buildRound(activity) {
    var generate = GENERATORS[activity.generator] || GENERATORS.times;
    var options = activity.options || {};
    var count = Number(activity.count) || 5;
    var round = [];
    var seen = {};
    var attempts = 0;

    while (round.length < count && attempts < count * 20) {
      attempts += 1;
      var item = generate(options);
      if (seen[item.text]) { continue; }
      seen[item.text] = true;
      round.push(item);
    }
    return round;
  }

  /**
   * Arma una ronda de practica con ejercicios generados al azar.
   * @param {Object} activity - Definicion con generator, count y options.
   * @param {Object} ctx - Contexto con feedback, finish y estado inicial.
   * @returns {HTMLElement} Lista de ejercicios con su campo de respuesta.
   */
  function buildPractice(activity, ctx) {
    var board = el('div', { className: 'practice' });

    /**
     * Pinta una ronda nueva de ejercicios en el tablero.
     * @returns {void}
     */
    function paint() {
      board.innerHTML = '';
      buildRound(activity).forEach(function (item) {
        var row = el('div', { className: 'practice__row' });
        row.appendChild(el('span', { className: 'practice__text', text: item.text + ' =' }));
        var input = el('input', {
          className: 'fill__blank',
          attrs: {
            type: 'text',
            inputmode: 'numeric',
          size: '8',
            size: '8',
            autocomplete: 'off',
            'aria-label': 'Resultado de ' + item.text
          }
        });
        input.dataset.answer = String(item.answer);
        row.appendChild(input);
        board.appendChild(row);
      });
    }

    paint();

    var check = el('button', { className: 'btn btn--primary btn--sm', attrs: { type: 'button' }, text: 'Comprobar' });
    var again = el('button', {
      className: 'btn btn--ghost btn--sm',
      attrs: { type: 'button' },
      html: ICONS.reload + '<span>Otra ronda</span>'
    });

    check.addEventListener('click', function () {
      var inputs = board.querySelectorAll('.fill__blank');
      var correct = 0;
      Array.prototype.forEach.call(inputs, function (input) {
        var ok = answerMatches(input.value, input.dataset.answer);
        input.classList.toggle('is-correct', ok);
        input.classList.toggle('is-wrong', !ok);
        if (ok) { correct += 1; }
      });
      if (correct === inputs.length) {
        ctx.finish(true, activity.explain || 'Resolviste toda la ronda sin errores.');
      } else {
        ctx.finish(false, 'Acertaste ' + correct + ' de ' + inputs.length + '. Revisa las que quedaron en rojo.');
      }
    });

    again.addEventListener('click', function () {
      paint();
      ctx.clearFeedback();
    });

    ctx.actions.push(check);
    ctx.actions.push(again);

    /**
     * Muestra los resultados correctos cuando la ronda ya se habia superado.
     * @returns {void}
     */
    ctx.markSolved = function () {
      Array.prototype.forEach.call(board.querySelectorAll('.fill__blank'), function (input) {
        input.value = formatNumber(Number(input.dataset.answer));
        input.classList.add('is-correct');
      });
    };

    /**
     * Genera una ronda nueva para volver a practicar.
     * @returns {void}
     */
    ctx.reset = function () { paint(); };

    return board;
  }

  /** Constructores disponibles segun el tipo declarado en la actividad. */
  var BUILDERS = {
    choice: buildChoice,
    truefalse: buildChoice,
    fill: buildFill,
    match: buildMatch,
    order: buildOrder,
    practice: buildPractice,
    mood: buildMood,
    classify: buildClassify,
    numericPair: buildNumericPair,
    numeric: buildNumeric
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
      // En las secciones que no califican nunca se muestra acierto ni error.
      var neutral = opts.grades === false;
      var section = el('section', { className: 'activity' + (neutral ? ' activity--soft' : '') });
      var feedback = createFeedback();
      var actions = el('div', { className: 'activity__actions' });
      var retry = el('button', {
        className: 'btn btn--ghost btn--sm',
        attrs: { type: 'button' },
        text: neutral ? 'Volver a empezar' : 'Intentar de nuevo'
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
        showHint: function (message) { showFeedback(feedback, neutral ? 'soft' : 'no', message); },

        /**
         * Lee el dato guardado de esta actividad (historial del termometro).
         * @returns {*} Valor guardado, o null si no hay nada.
         */
        readData: function () {
          return opts.areaId && opts.storageKey
            ? global.Progress.getData(opts.areaId, opts.storageKey)
            : null;
        },

        /**
         * Guarda un dato propio de esta actividad.
         * @param {*} value - Valor a guardar (debe poder convertirse a JSON).
         * @returns {void}
         */
        writeData: function (value) {
          if (opts.areaId && opts.storageKey) {
            global.Progress.saveData(opts.areaId, opts.storageKey, value);
          }
        },

        /**
         * Oculta la retroalimentacion, por ejemplo al empezar una ronda nueva.
         * @returns {void}
         */
        clearFeedback: function () {
          feedback.hidden = true;
          retry.hidden = true;
        },

        /**
         * Cierra un intento: pinta la retroalimentacion y avisa al llamador.
         * @param {boolean} ok - true si la respuesta fue correcta.
         * @param {string} message - Mensaje para el estudiante.
         * @returns {void}
         */
        finish: function (ok, message) {
          showFeedback(feedback, neutral ? 'soft' : (ok ? 'ok' : 'no'), message);
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
        showFeedback(feedback, neutral ? 'soft' : 'ok', neutral ? 'Ya hiciste esta parte.' : 'Ya resolviste esta actividad.');
        retry.hidden = false;
      }

      return section;
    }
  };

  global.Activities = Activities;
}(window));

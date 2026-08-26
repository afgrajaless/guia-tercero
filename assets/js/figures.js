/* ==========================================================================
   figures.js — Genera los diagramas de las lecciones a partir de parametros.
   Quien escribe el contenido nunca escribe SVG a mano: declara que figura
   quiere y con que valores. Los colores salen de los tokens, asi que las
   figuras funcionan igual en tema claro y oscuro.
   ========================================================================== */

(function (global) {
  'use strict';

  var escapeHtml = global.Guide.escapeHtml;
  var formatNumber = global.Guide.formatNumber;

  /**
   * Envuelve el contenido de un SVG con su viewBox y atributos de accesibilidad.
   * @param {number} width - Ancho del sistema de coordenadas.
   * @param {number} height - Alto del sistema de coordenadas.
   * @param {string} body - Marcado interno del SVG.
   * @returns {string} SVG completo como texto.
   */
  function svg(width, height, body) {
    return '<svg class="figure__svg" viewBox="0 0 ' + width + ' ' + height + '" ' +
           'preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true" focusable="false">' +
           body + '</svg>';
  }

  /**
   * Dibuja una recta numerica con marcas y puntos destacados.
   * @param {Object} spec - { from, to, step, points: [{value, label}] }.
   * @returns {string} SVG de la recta numerica.
   */
  function numberLine(spec) {
    var from = Number(spec.from) || 0;
    var to = Number(spec.to != null ? spec.to : from + 10);
    var step = Number(spec.step) || 1;
    var points = spec.points || [];

    var width = 640;
    var height = 120;
    var left = 40;
    var right = width - 40;
    var axisY = 62;
    var span = to - from || 1;
    var body = '';

    /**
     * Traduce un valor de la recta a su coordenada horizontal en el dibujo.
     * @param {number} value - Valor sobre la recta numerica.
     * @returns {number} Coordenada x dentro del SVG.
     */
    function x(value) {
      return left + ((value - from) / span) * (right - left);
    }

    body += '<line class="fig-axis" x1="' + (left - 16) + '" y1="' + axisY + '" x2="' + (right + 16) + '" y2="' + axisY + '"/>';
    body += '<path class="fig-axis" d="M' + (right + 16) + ' ' + axisY + ' l-10 -6 v12 Z" fill="currentColor"/>';

    for (var value = from; value <= to + 0.0001; value += step) {
      var px = x(value);
      body += '<line class="fig-tick" x1="' + px + '" y1="' + (axisY - 9) + '" x2="' + px + '" y2="' + (axisY + 9) + '"/>';
      body += '<text class="fig-label" x="' + px + '" y="' + (axisY + 30) + '" text-anchor="middle">' +
              escapeHtml(formatNumber(Math.round(value))) + '</text>';
    }

    points.forEach(function (point) {
      var px = x(Number(point.value));
      body += '<circle class="fig-point" cx="' + px + '" cy="' + axisY + '" r="9"/>';
      if (point.label) {
        body += '<text class="fig-label fig-label--strong" x="' + px + '" y="' + (axisY - 20) + '" text-anchor="middle">' +
                escapeHtml(point.label) + '</text>';
      }
    });

    return svg(width, height, body);
  }

  /**
   * Dibuja una fraccion como barra o como circulo dividido en partes iguales.
   * @param {Object} spec - { parts, filled, shape: 'bar' | 'circle' }.
   * @returns {string} SVG de la fraccion.
   */
  function fraction(spec) {
    var parts = Math.max(1, Number(spec.parts) || 2);
    var filled = Math.min(parts, Math.max(0, Number(spec.filled) || 0));
    var body = '';

    if (spec.shape === 'circle') {
      var cx = 110;
      var cy = 110;
      var radius = 90;
      for (var i = 0; i < parts; i += 1) {
        var start = (i / parts) * Math.PI * 2 - Math.PI / 2;
        var end = ((i + 1) / parts) * Math.PI * 2 - Math.PI / 2;
        var large = (end - start) > Math.PI ? 1 : 0;
        var path = 'M' + cx + ' ' + cy +
                   ' L' + (cx + radius * Math.cos(start)) + ' ' + (cy + radius * Math.sin(start)) +
                   ' A' + radius + ' ' + radius + ' 0 ' + large + ' 1 ' +
                   (cx + radius * Math.cos(end)) + ' ' + (cy + radius * Math.sin(end)) + ' Z';
        body += '<path class="fig-slice' + (i < filled ? ' is-filled' : '') + '" d="' + path + '"/>';
      }
      return svg(220, 220, body);
    }

    var width = 640;
    var height = 110;
    var pad = 20;
    var boxWidth = (width - pad * 2) / parts;
    for (var j = 0; j < parts; j += 1) {
      body += '<rect class="fig-slice' + (j < filled ? ' is-filled' : '') + '" x="' + (pad + j * boxWidth) +
              '" y="20" width="' + boxWidth + '" height="70" rx="6"/>';
    }
    return svg(width, height, body);
  }

  /** Vertices de cada figura plana, en un lienzo de 200 x 200. */
  var SHAPES = {
    triangulo: '100,20 180,175 20,175',
    cuadrado: '30,30 170,30 170,170 30,170',
    rectangulo: '15,55 185,55 185,145 15,145',
    rombo: '100,20 180,100 100,180 20,100',
    pentagono: '100,18 180,76 149,172 51,172 20,76',
    hexagono: '100,18 168,58 168,142 100,182 32,142 32,58',
    trapecio: '55,45 145,45 185,165 15,165'
  };

  /**
   * Dibuja una figura plana con sus vertices marcados.
   * @param {Object} spec - { name } nombre de la figura a dibujar.
   * @returns {string} SVG de la figura.
   */
  function shape(spec) {
    var name = String(spec.name || 'cuadrado').toLowerCase();
    var body = '';

    if (name === 'circulo') {
      body = '<circle class="fig-shape" cx="100" cy="100" r="82"/>';
      return svg(200, 200, body);
    }

    var points = SHAPES[name] || SHAPES.cuadrado;
    body += '<polygon class="fig-shape" points="' + points + '"/>';
    points.split(' ').forEach(function (pair) {
      var xy = pair.split(',');
      body += '<circle class="fig-vertex" cx="' + xy[0] + '" cy="' + xy[1] + '" r="6"/>';
    });
    return svg(200, 200, body);
  }

  /**
   * Dibuja un pictograma: una fila de simbolos por cada categoria.
   * @param {Object} spec - { rows: [{label, count}], unit }.
   * @returns {string} SVG del pictograma.
   */
  function pictogram(spec) {
    var rows = spec.rows || [];
    var width = 640;
    var rowHeight = 54;
    var labelWidth = 190;
    var size = 26;
    var gap = 10;
    var height = Math.max(1, rows.length) * rowHeight + 20;
    var body = '';

    rows.forEach(function (row, index) {
      var y = 20 + index * rowHeight;
      body += '<text class="fig-label fig-label--strong" x="0" y="' + (y + size / 2 + 5) + '">' +
              escapeHtml(row.label) + '</text>';
      var count = Math.max(0, Number(row.count) || 0);
      for (var i = 0; i < count; i += 1) {
        body += '<rect class="fig-unit" x="' + (labelWidth + i * (size + gap)) + '" y="' + y +
                '" width="' + size + '" height="' + size + '" rx="7"/>';
      }
      body += '<text class="fig-label" x="' + (labelWidth + count * (size + gap) + 8) + '" y="' + (y + size / 2 + 5) + '">' +
              escapeHtml(String(count)) + '</text>';
    });

    return svg(width, height, body);
  }

  /** Generadores disponibles para el bloque de tipo figure. */
  var FIGURES = {
    numberLine: numberLine,
    fraction: fraction,
    shape: shape,
    pictogram: pictogram
  };

  global.Figures = {
    /**
     * Construye el bloque visual de una figura con su descripcion accesible.
     * @param {Object} spec - { figure, alt, caption, ...parametros de la figura }.
     * @returns {HTMLElement} Elemento figure listo para insertar en la leccion.
     */
    render: function (spec) {
      var build = FIGURES[spec.figure];
      var node = document.createElement('figure');
      node.className = 'figure';

      if (!build) {
        node.innerHTML = '<figcaption class="figure__caption">Figura no reconocida: ' +
                         escapeHtml(String(spec.figure)) + '</figcaption>';
        return node;
      }

      var description = spec.alt || spec.caption || 'Diagrama de apoyo de la lección';
      node.innerHTML = '<div class="figure__canvas">' + build(spec) + '</div>' +
                       '<figcaption class="figure__caption">' + escapeHtml(spec.caption || description) + '</figcaption>' +
                       '<span class="visually-hidden">' + escapeHtml(description) + '</span>';
      return node;
    }
  };
}(window));

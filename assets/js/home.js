/* ==========================================================================
   home.js — Portada: tarjetas de area con el avance del estudiante
   ========================================================================== */

(function (global) {
  'use strict';

  var Guide = global.Guide;
  var Progress = global.Progress;
  var el = Guide.el;
  var ICONS = Guide.ICONS;

  /**
   * Construye la tarjeta de acceso a un area con su avance actual.
   * @param {Object} area - Contenido registrado del area.
   * @returns {HTMLElement} Enlace con forma de tarjeta.
   */
  function renderCard(area) {
    var stats = Progress.areaStats(area);
    var card = el('a', {
      className: 'area-card reveal',
      attrs: { href: area.href, 'data-area': area.id }
    });

    card.appendChild(el('span', {
      className: 'area-card__icon',
      html: ICONS[area.icon] || ICONS.book
    }));
    card.appendChild(el('h3', { className: 'area-card__title', text: area.title }));
    card.appendChild(el('p', { className: 'area-card__text', text: area.description }));

    var progress = el('div', { className: 'progress' });
    var meta = el('div', { className: 'progress__meta' });
    meta.appendChild(el('span', { text: stats.solved + ' / ' + stats.total + ' actividades' }));
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
    progress.appendChild(meta);
    progress.appendChild(track);
    card.appendChild(progress);

    var foot = el('div', { className: 'area-card__foot' });
    foot.appendChild(el('span', { text: (area.units || []).length + ' unidades' }));
    foot.appendChild(el('span', {
      className: 'area-card__cta',
      html: '<span>Entrar</span>' + ICONS.arrow
    }));
    card.appendChild(foot);

    requestAnimationFrame(function () { fill.style.width = stats.percent + '%'; });
    return card;
  }

  /**
   * Calcula y muestra el avance global sumando las tres areas.
   * @param {HTMLElement} host - Contenedor donde escribir el resumen.
   * @returns {void}
   */
  function renderSummary(host) {
    var solved = 0;
    var total = 0;
    Guide.list().forEach(function (area) {
      var stats = Progress.areaStats(area);
      solved += stats.solved;
      total += stats.total;
    });
    var percent = total === 0 ? 0 : Math.round((solved / total) * 100);
    host.innerHTML = '';
    host.appendChild(el('span', { html: ICONS.star }));
    host.appendChild(el('span', { text: solved + ' de ' + total + ' actividades (' + percent + '%)' }));
  }

  /**
   * Punto de entrada de la portada: pinta tarjetas, resumen y boton de reinicio.
   * @returns {void}
   */
  function start() {
    var grid = document.querySelector('[data-area-grid]');
    var summary = document.querySelector('[data-summary]');
    if (!grid) { return; }

    /**
     * Redibuja las tarjetas y el resumen con los datos mas recientes.
     * @returns {void}
     */
    function paint() {
      grid.innerHTML = '';
      Guide.list().forEach(function (area) { grid.appendChild(renderCard(area)); });
      if (summary) { renderSummary(summary); }
      Guide.setupReveal(grid);
    }

    paint();

    var reset = document.querySelector('[data-reset-all]');
    if (reset) {
      reset.addEventListener('click', function () {
        if (!global.confirm('Se borrará todo tu avance en las tres áreas. ¿Quieres continuar?')) { return; }
        Progress.resetAll();
        paint();
        Guide.toast('Empezamos de nuevo');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', start);
}(window));

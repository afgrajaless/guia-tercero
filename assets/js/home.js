/* ==========================================================================
   home.js — Portada: agenda de la semana con el avance de cada día
   ========================================================================== */

(function (global) {
  'use strict';

  var Guide = global.Guide;
  var Progress = global.Progress;
  var el = Guide.el;
  var ICONS = Guide.ICONS;

  /** Días de la semana que todavía no tienen contenido asignado. */
  var PENDING = [
    {
      day: 'Viernes 4',
      date: 'Viernes 4 de septiembre',
      title: 'Aún por definir',
      description: 'Este espacio queda reservado. Cuando se defina qué se trabaja el viernes, se agrega aquí.'
    }
  ];

  /**
   * Construye la tarjeta de un día con contenido, mostrando su avance.
   * @param {Object} area - Contenido registrado del área.
   * @returns {HTMLElement} Enlace con forma de tarjeta.
   */
  function renderDayCard(area) {
    var stats = Progress.areaStats(area);
    var card = el('a', {
      className: 'area-card reveal',
      attrs: { href: area.href, 'data-area': area.id }
    });

    var top = el('div', { className: 'area-card__top' });
    top.appendChild(el('span', {
      className: 'area-card__icon',
      html: ICONS[area.icon] || ICONS.book
    }));
    top.appendChild(el('span', {
      className: 'area-card__day',
      text: area.day ? area.day.short : ''
    }));
    card.appendChild(top);

    card.appendChild(el('p', { className: 'area-card__subject', text: area.short }));
    card.appendChild(el('h3', { className: 'area-card__title', text: area.title }));
    card.appendChild(el('p', { className: 'area-card__text', text: area.description }));

    var progress = el('div', { className: 'progress' });
    var meta = el('div', { className: 'progress__meta' });
    var word = area.grades === false ? 'partes hechas' : 'actividades';
    meta.appendChild(el('span', { text: stats.solved + ' / ' + stats.total + ' ' + word }));
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
    foot.appendChild(el('span', { text: (area.units || []).length + ' lecciones' }));
    foot.appendChild(el('span', {
      className: 'area-card__cta',
      html: '<span>Entrar</span>' + ICONS.arrow
    }));
    card.appendChild(foot);

    requestAnimationFrame(function () { fill.style.width = stats.percent + '%'; });
    return card;
  }

  /**
   * Construye la tarjeta de un día que todavía no tiene contenido definido.
   * @param {Object} entry - Datos del día pendiente.
   * @returns {HTMLElement} Tarjeta sin enlace.
   */
  function renderPendingCard(entry) {
    var card = el('div', { className: 'area-card area-card--pending reveal' });

    var top = el('div', { className: 'area-card__top' });
    top.appendChild(el('span', { className: 'area-card__icon', html: ICONS.compass }));
    top.appendChild(el('span', { className: 'area-card__day', text: entry.day }));
    card.appendChild(top);

    card.appendChild(el('p', { className: 'area-card__subject', text: 'Sin asignar' }));
    card.appendChild(el('h3', { className: 'area-card__title', text: entry.title }));
    card.appendChild(el('p', { className: 'area-card__text', text: entry.description }));

    var foot = el('div', { className: 'area-card__foot' });
    foot.appendChild(el('span', { text: entry.date }));
    card.appendChild(foot);
    return card;
  }

  /**
   * Calcula y muestra el avance total sumando los tres días con contenido.
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
    host.appendChild(el('span', { text: solved + ' de ' + total + ' actividades de la semana (' + percent + '%)' }));
  }

  /**
   * Punto de entrada de la portada: pinta la agenda, el resumen y el reinicio.
   * @returns {void}
   */
  function start() {
    var grid = document.querySelector('[data-area-grid]');
    var summary = document.querySelector('[data-summary]');
    if (!grid) { return; }

    /**
     * Redibuja la agenda con los datos de avance más recientes.
     * @returns {void}
     */
    function paint() {
      grid.innerHTML = '';
      Guide.list().forEach(function (area) { grid.appendChild(renderDayCard(area)); });
      PENDING.forEach(function (entry) { grid.appendChild(renderPendingCard(entry)); });
      if (summary) { renderSummary(summary); }
      Guide.setupReveal(grid);
    }

    paint();

    var reset = document.querySelector('[data-reset-all]');
    if (reset) {
      reset.addEventListener('click', function () {
        if (!global.confirm('Se borrará todo tu avance de la semana. ¿Quieres continuar?')) { return; }
        Progress.resetAll();
        paint();
        Guide.toast('Empezamos de nuevo');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', start);
}(window));

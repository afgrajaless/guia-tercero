/* ==========================================================================
   home.js — Portada: agenda de la semana con lo que trae cada día.
   No hay avance ni porcentajes: la guía se resuelve en el cuaderno, así que
   cada tarjeta anuncia cuántas lecciones y cuántas actividades trae el día.
   ========================================================================== */

(function (global) {
  'use strict';

  var Guide = global.Guide;
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
   * Cuenta las lecciones y las consignas de cuaderno de un área.
   * @param {Object} area - Contenido del área.
   * @returns {{lessons:number, tasks:number}} Resumen de lo que trae el día.
   */
  function countArea(area) {
    var lessons = 0;
    var tasks = 0;
    (area.units || []).forEach(function (unit) {
      (unit.lessons || []).forEach(function (lesson) {
        lessons += 1;
        (lesson.blocks || []).forEach(function (block) {
          if (block.type === 'notebook') { tasks += 1; }
        });
      });
    });
    return { lessons: lessons, tasks: tasks };
  }

  /**
   * Construye la tarjeta de un día con contenido.
   * @param {Object} area - Contenido registrado del área.
   * @returns {HTMLElement} Enlace con forma de tarjeta.
   */
  function renderDayCard(area) {
    var counts = countArea(area);
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

    card.appendChild(el('p', {
      className: 'area-card__count',
      html: ICONS.pencil + '<span>' + counts.tasks + ' actividades para el cuaderno</span>'
    }));

    var foot = el('div', { className: 'area-card__foot' });
    foot.appendChild(el('span', { text: counts.lessons + ' lecciones' }));
    foot.appendChild(el('span', {
      className: 'area-card__cta',
      html: '<span>Entrar</span>' + ICONS.arrow
    }));
    card.appendChild(foot);

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
   * Escribe el resumen de la semana sumando los días con contenido.
   * @param {HTMLElement} host - Contenedor donde escribir el resumen.
   * @returns {void}
   */
  function renderSummary(host) {
    var days = 0;
    var tasks = 0;
    Guide.list().forEach(function (area) {
      days += 1;
      tasks += countArea(area).tasks;
    });
    host.innerHTML = '';
    host.appendChild(el('span', { html: ICONS.pencil }));
    host.appendChild(el('span', { text: days + ' días · ' + tasks + ' actividades para el cuaderno' }));
  }

  /**
   * Punto de entrada de la portada: pinta la agenda y el resumen.
   * @returns {void}
   */
  function start() {
    var grid = document.querySelector('[data-area-grid]');
    var summary = document.querySelector('[data-summary]');
    if (!grid) { return; }

    Guide.list().forEach(function (area) { grid.appendChild(renderDayCard(area)); });
    PENDING.forEach(function (entry) { grid.appendChild(renderPendingCard(entry)); });
    if (summary) { renderSummary(summary); }
    Guide.setupReveal(grid);
  }

  document.addEventListener('DOMContentLoaded', start);
}(window));

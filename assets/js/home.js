/* ==========================================================================
   home.js — Portada: las tres secciones de la guía.
   No hay avance ni porcentajes: la guía se resuelve en el cuaderno. Tampoco se
   anuncia cuántas actividades trae cada sección, solo cuántas lecciones: el
   número grande asusta antes de empezar.
   ========================================================================== */

(function (global) {
  'use strict';

  var Guide = global.Guide;
  var el = Guide.el;
  var ICONS = Guide.ICONS;

  /**
   * Cuenta las lecciones de un área.
   * A propósito no se cuentan las consignas: anunciarle a un niño de ocho años
   * que una sección trae quince actividades lo desanima antes de abrir el cuaderno.
   * @param {Object} area - Contenido del área.
   * @returns {number} Número de lecciones de la sección.
   */
  function countLessons(area) {
    var lessons = 0;
    (area.units || []).forEach(function (unit) {
      lessons += (unit.lessons || []).length;
    });
    return lessons;
  }

  /**
   * Construye la tarjeta de una sección.
   * @param {Object} area - Contenido registrado del área.
   * @returns {HTMLElement} Enlace con forma de tarjeta.
   */
  function renderSectionCard(area) {
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
      text: area.section ? area.section.short : ''
    }));
    card.appendChild(top);

    card.appendChild(el('p', { className: 'area-card__subject', text: area.short }));
    card.appendChild(el('h3', { className: 'area-card__title', text: area.title }));
    card.appendChild(el('p', { className: 'area-card__text', text: area.description }));

    var foot = el('div', { className: 'area-card__foot' });
    foot.appendChild(el('span', { text: countLessons(area) + ' lecciones' }));
    foot.appendChild(el('span', {
      className: 'area-card__cta',
      html: '<span>Entrar</span>' + ICONS.arrow
    }));
    card.appendChild(foot);

    return card;
  }

  /**
   * Escribe el recordatorio de la portada. Es una frase que tranquiliza, no
   * una cuenta: la guía no se mide en cantidad de ejercicios.
   * @param {HTMLElement} host - Contenedor donde escribir el recordatorio.
   * @returns {void}
   */
  function renderSummary(host) {
    host.innerHTML = '';
    host.appendChild(el('span', { html: ICONS.pencil }));
    host.appendChild(el('span', { text: 'Sin nota y sin afán · todo va en el cuaderno' }));
  }

  /**
   * Punto de entrada de la portada: pinta las tres secciones y el recordatorio.
   * @returns {void}
   */
  function start() {
    var grid = document.querySelector('[data-area-grid]');
    var summary = document.querySelector('[data-summary]');
    if (!grid) { return; }

    Guide.list().forEach(function (area) { grid.appendChild(renderSectionCard(area)); });
    if (summary) { renderSummary(summary); }
    Guide.setupReveal(grid);
  }

  document.addEventListener('DOMContentLoaded', start);
}(window));

"use strict";

/**
 * Add event listener on multiple items
 * @param {NodeList} $elements
 * @param {String} eventType
 * @param {Function} callback
 */

const addEventOnElements = ($elements, eventType, callback) => {
  for (const $item of $elements) {
    $item.addEventListener(eventType, callback);
  }
};


/**
 * Header scroll state
 */

const $header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
    $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');
});


/**
 * Search toggle
 */

const $searchToggler = document.querySelector('[data-search-toggler]');
const $searchField = document.querySelector('[data-search-field]');

let isExpanded = false;

$searchToggler.addEventListener('click', () => {
    $header.classList.toggle('search-active');
    isExpanded = isExpanded ? false : true;
    $searchToggler.setAttribute('aria-expanded', isExpanded);
    $searchField.focus();
});



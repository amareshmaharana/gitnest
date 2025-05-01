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

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Search toggle
 */

const $searchToggler = document.querySelector("[data-search-toggler]");
const $searchField = document.querySelector("[data-search-field]");

let isExpanded = false;

$searchToggler.addEventListener("click", () => {
  $header.classList.toggle("search-active");
  isExpanded = isExpanded ? false : true;
  $searchToggler.setAttribute("aria-expanded", isExpanded);
  $searchField.focus();
});

/**
 * Tab Navigation
 */

const $tabBtns = document.querySelectorAll(
  "[data-tab-btn], [data-forked-tab-btn], [data-followers-tab-btn], [data-following-tab-btn]"
);
const $tabPanels = document.querySelectorAll("[data-tab-panel]");

let [$lastActiveTabBtn] = $tabBtns;
let [$lastActiveTabPanel] = $tabPanels;

addEventOnElements($tabBtns, "click", function () {
  $lastActiveTabBtn.setAttribute("aria-selected", "false");
  $lastActiveTabPanel.setAttribute("hidden", "");

  this.setAttribute("aria-selected", "true");
  const $currentTabPanel = document.querySelector(
    `#${this.getAttribute("aria-controls")}`
  );
  $currentTabPanel.removeAttribute("hidden");

  $lastActiveTabBtn = this;
  $lastActiveTabPanel = $currentTabPanel;
});

/**
 * key accessibility for tab buttons
 */

addEventOnElements($tabBtns, "keydown", function (e) {
  const $nextElement = this.nextElementSibling;
  const $previousElement = this.previousElementSibling;

  if (e.key === "ArrowRight" && $nextElement) {
    this.setAttribute("tabindex", "-1");
    $nextElement.setAttribute("tabindex", "0");
    $nextElement.focus();
  } else if (e.key === "ArrowLeft" && $previousElement) {
    this.setAttribute("tabindex", "-1");
    $previousElement.setAttribute("tabindex", "0");
    $previousElement.focus();
  }
});

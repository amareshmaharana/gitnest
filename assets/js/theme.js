"use strict";

const /** {NodeList} */ $HTML = document.documentElement;
const /** {Element} */ isDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

let /** {Boolean} */ isPressed = false;

const changeTheme = (event) => {
    isPressed = isPressed ? false : true;
    event.target.setAttribute('aria-pressed', isPressed);

    $HTML.setAttribute('data-theme', ($HTML.dataset.theme === 'light') ? 'dark' : 'light');
    sessionStorage.setItem('theme', $HTML.dataset.theme);
}

window.addEventListener("load", () => {
  const /** {Element} */ $themeBtn = document.querySelector('[data-theme-btn]');

  $themeBtn.addEventListener("click", changeTheme);
});

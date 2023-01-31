// navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;

  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fix");
  } else {
    header.classList.remove("navbar-fix");
  }
};

// menu
const menu = document.querySelector("#menu");
const navMenu = document.querySelector("#nav-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("menu-on");
  navMenu.classList.toggle("hidden");
});

// click everywhere will close the nav menu
window.addEventListener("click", function (e) {
  if (e.target != menu && e.target != navMenu) {
    menu.classList.remove("menu-on");
    navMenu.classList.add("hidden");
  }
});

// darkmode
const darkMode = document.getElementById("darkmode");
const lightMode = document.getElementById("lightmode");
const html = document.querySelector("html");

darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("hidden");
  lightMode.classList.toggle("hidden");
  html.classList.add("dark");
  localStorage.theme = "dark";
});

lightMode.addEventListener("click", function () {
  lightMode.classList.toggle("hidden");
  darkMode.classList.toggle("hidden");
  html.classList.remove("dark");
  localStorage.theme = "light";
});

// logo will move
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkMode.classList.add("hidden");
  lightMode.classList.remove("hidden");
} else {
  // lol
}

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

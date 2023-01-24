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

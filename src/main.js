import './styles/style.scss';
import './slider.js';
const burger = document.querySelector('.burger');
const overlay = document.querySelector('.menuOverlay');
const menuLinks = document.querySelectorAll(
  '.header__menu-link, .drop__list-link'
);
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
function setMenuState(isOpen) {
  if (!burger) return;

  document.body.classList.toggle('menu-open', isOpen);
  document.documentElement.classList.toggle("menu-open", isOpen);
  burger.classList.toggle('is-active', isOpen);

  burger.setAttribute('aria-expanded', String(isOpen));
  burger.setAttribute(
    'aria-label',
    isOpen ? 'Закрыть меню' : 'Открыть меню'
  );
}

burger?.addEventListener('click', () => {
  const isOpen = !document.body.classList.contains('menu-open');

  setMenuState(isOpen);
});

overlay?.addEventListener('click', () => {
  setMenuState(false);
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 1200) {
      setMenuState(false);
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuState(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1200) {
    setMenuState(false);
  }
});

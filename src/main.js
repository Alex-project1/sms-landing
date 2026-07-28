import './styles/style.scss';

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll(
  '.mobile-nav__link',
);

const setMenuState = (isOpen) => {
  if (!burger || !mobileMenu) {
    return;
  }

  burger.classList.toggle('is-active', isOpen);
  mobileMenu.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);

  burger.setAttribute(
    'aria-expanded',
    String(isOpen),
  );

  burger.setAttribute(
    'aria-label',
    isOpen ? 'Закрыть меню' : 'Открыть меню',
  );

  mobileMenu.setAttribute(
    'aria-hidden',
    String(!isOpen),
  );
};

const closeMenu = () => {
  setMenuState(false);
};

burger?.addEventListener('click', () => {
  const isOpen = burger.classList.contains('is-active');

  setMenuState(!isOpen);
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});
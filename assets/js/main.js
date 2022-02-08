// Show menu
const showMenu = () => {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });

  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });

  const navLink = document.querySelectorAll('.nav__link');

  // Close menu after clicking link
  navLink.forEach((nl) => {
    nl.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });
};

showMenu();

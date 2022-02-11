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

const scrollHeader = () => {
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    this.scrollY >= 100
      ? header.classList.add('scroll-header')
      : header.classList.remove('scroll-header');
  });
};

scrollHeader();

var swiper = new Swiper('.discover__container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
  },
  loop: true,
  spaceBetween: 32,
});

const playPauseVideo = () => {
  const videoFile = document.getElementById('video-file');
  const videoButton = document.getElementById('video-button');
  const videoIcon = document.getElementById('video-icon');

  videoButton.addEventListener('click', () => {
    if (videoFile.paused) {
      videoFile.play();
      videoIcon.classList.replace('ri-play-line', 'ri-pause-line');
    } else {
      videoFile.pause();
      videoIcon.classList.replace('ri-pause-line', 'ri-play-line');
    }
  });

  // Bring back play icon when video ends
  videoFile.addEventListener('ended', () => {
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
  });
};

playPauseVideo();

const scrollUp = () => {
  window.addEventListener('scroll', () => {
    const scrollUpBtn = document.getElementById('scroll-up');
    this.scrollY >= 200
      ? scrollUpBtn.classList.add('show-scroll')
      : scrollUpBtn.classList.remove('show-scroll');
  });
};

scrollUp();

const activeOnScroll = () => {
  const viewPortHeight = document.documentElement.clientHeight;
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    sections.forEach((current) => {
      const sectionPosition = current.getBoundingClientRect().y;
      const sectionHeight = current.getBoundingClientRect().height;
      const currentNavItem = document.querySelector(
        `.nav__menu a[href*=${current.getAttribute('id')}]`
      );
      const activeLink = document.querySelector('.nav__menu a.active-link');

      if (viewPortHeight > sectionPosition + (sectionHeight * 2) / 3) {
        activeLink.classList.remove('active-link');
        currentNavItem.classList.add('active-link');
      }
    });
  });
};

activeOnScroll();

const themeChanger = () => {
  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme';
  const iconTheme = 'ri-sun-line';

  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  if (selectedTheme === 'dark') {
    document.body.classList.add(darkTheme);
    themeButton.classList.add(iconTheme);
  }

  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    const getCurrentTheme = document.body.classList.contains(darkTheme)
      ? 'dark'
      : 'light';
    const getCurrentIcon = themeButton.classList.contains(iconTheme)
      ? 'ri-moon-line'
      : 'ri-sun-line';

    localStorage.setItem('selected-theme', getCurrentTheme);
    localStorage.setItem('selected-icon', getCurrentIcon);
  });
};

themeChanger();

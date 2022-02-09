const toggleBodyScroll = () => {
  document.body.classList.toggle('overflow-y-hidden');
};

const showMenu = () => {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  navToggle.addEventListener('click', () => {
    toggleBodyScroll();
    navMenu.classList.add('show-menu');
  });

  navClose.addEventListener('click', () => {
    toggleBodyScroll();
    navMenu.classList.remove('show-menu');
  });

  const navLink = document.querySelectorAll('.nav__link');

  // Close menu after clicking link
  navLink.forEach((nl) => {
    nl.addEventListener('click', () => {
      toggleBodyScroll();
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

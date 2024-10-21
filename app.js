const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

console.log(window.scrollY)
menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const experiencesMenu = document.querySelector('#experiences-page');
  const projectsMenu = document.querySelector('#projects-page');
  let scrollPos = window.scrollY;

  if (window.innerWidth > 960 && scrollPos < 332) { //On Home
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 600) { //on About
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    experiencesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1381) {//on Experiences
    experiencesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    projectsMenu.classList.remove('highlight');
    return;
  }
  else if (window.innerWidth > 960 && scrollPos > 1381){
    projectsMenu.classList.add('highlight');
    experiencesMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const closeMenu = () => {
    const menuBars = document.querySelector(".is-active")
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', closeMenu);
navLogo.addEventListener('click', closeMenu);
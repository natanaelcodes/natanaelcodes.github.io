const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top - windowMetade;

    if (top < 0) {
      section.classList.add('ativo');
    } else {
      section.classList.remove('ativo');
    }
  });
}

window.addEventListener('scroll', animaScroll);
animaScroll();

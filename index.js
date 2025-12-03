const scroll=document.querySelector('.js-scroll');
const windowmetade = window.innerHeight * 0.6;
function animacao(){
  
if(scroll.getBoundingClientRect().top < windowmetade){
scroll.classList.add('ativo')
}





}

window.addEventListener('scroll', animacao)
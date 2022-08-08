window.addEventListener('scroll', onScroll) 
window.setInterval(hueIncrement , 45)
/* 
  Executa a função onScroll ao registrar scroll, aplica para toda a pagina. 
  É uma alternativa a ter que declarar a execução da função no body ao registrar scroll.
*/
var r = document.querySelector(':root')
var hue = 170

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function hueIncrement() {
  hue ++
  r.style.setProperty('--hue', hue)
}

function showNavOnScroll() {
  var element = document.getElementById("navigation");
  if(scrollY > 0) {
    element.classList.add('scroll')
  } else {
    element.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if(scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  } 
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

/* ScrollReveal().reveal('') */

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
 #home,
 #home img, 
 #home .stats,
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content`);   /* acento agudo " `` " permite quebra de linha */
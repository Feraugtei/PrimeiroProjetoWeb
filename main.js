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
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2  /* Obtem o scrollY no meio da tela visivel atual */
  
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = targetLine >= sectionEndsAt

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  
  if(sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function hueIncrement() {
  hue ++
  r.style.setProperty('--hue', hue)
}

function showNavOnScroll() {
  var element = document.getElementById("navigation")
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

let acceptedLanguages = ['en', 'pt']

const isNavigatorLanguageAccepted = acceptedLanguages.includes(navigator.language.split('-')[0]) 

if(isNavigatorLanguageAccepted){
  document.documentElement.setAttribute('lang', navigator.language);
  var currentlanguage = document.documentElement.lang.split('-')[0]
  changeLang(currentlanguage)
}

function changeLang(lang){
  document.head.insertAdjacentHTML('beforeend', `<style>.bilanguage::before {content: attr(data-${lang});}</style>`)
  currentLanguage = lang
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
 #about .content`); 
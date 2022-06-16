function onScroll() {
  var element = document.getElementById("navigation");
  if(scrollY > 0) {
    element.classList.add('scroll')
  } else {
    element.classList.remove('scroll')
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
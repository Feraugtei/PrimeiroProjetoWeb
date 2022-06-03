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
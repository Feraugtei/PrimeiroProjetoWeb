function onScroll() {
  var element = document.getElementById("navigation");
  if(scrollY > 0) {
    element.classList.add('scroll')
  } else {
    element.classList.remove('scroll')
  }
}
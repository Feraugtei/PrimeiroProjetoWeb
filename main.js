function onScroll() {
  if(scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

console.log("Para retrair nav, apague a classe 'menu-expanded' do body")


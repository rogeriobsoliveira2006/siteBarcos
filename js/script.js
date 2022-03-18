//Abre e fecha menu com JavaScript
var navs = document.querySelectorAll('.nav-toggle, .nav-close')
navs.forEach(item =>{
  item.addEventListener('click', toggleToClassOnClick)
})

function toggleToClassOnClick(event) {
  event.preventDefault()
  let nav = document.querySelector('nav')
  nav.classList.toggle('active')
}

//Fixar header com JavaScript
window.onscroll = function () {
  let header = document.querySelector('.header')
  let fixed = header.offsetTop
  if (window.pageYOffset > fixed) {
    header.classList.add('fixed')
  } else {
    header.classList.remove('fixed')
  }
}

var menuItems = document.querySelectorAll('.nav a[href^="#"]')
menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
  event.preventDefault()
  let element = event.target
  let id = element.getAttribute('href')
  let to = document.querySelector(id).offsetTop
  
  window.scroll({
    top: to - 100,
    behavior: "smooth"
  })
}

var topo = document.querySelector('.logo a')
topo.addEventListener('click', function (event) {
  event.preventDefault()
  let auxTop = document.body.scrollTop
  
  window.scroll({
    top: auxTop,
    behavior: "smooth"
  })
})
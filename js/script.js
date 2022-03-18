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

function getScrollTopByHref(element) {
  let id = element.getAttribute('href')
  return document.querySelector(id).offsetTop
}

function scrollToIdOnClick(event) {
  event.preventDefault()
  let to = getScrollTopByHref(event.target) - 100
  scrollToPosition(to)
}

function scrollToPosition(to) {
  /* window.scroll({
    top: to,
    behavior: "smooth"
  }) */
  smoothScrollTo(0, to, 800)
}

var menuItems = document.querySelectorAll('.nav a[href^="#"]')
menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})

var topo = document.querySelector('.logo a')
topo.addEventListener('click', function (event) {
  event.preventDefault()
  let auxTop = document.body.scrollTop
  scrollToPosition(auxTop)
})

/**
* ? Smooth scroll animation
* @param {int} endX: destination x coordinate
* @param {int} endY: destination y coordinate
* @param {int} duration: animation duration in ms
*/

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset
  const startY = window.scrollY || window.pageYOffset
  const distanceX = endX - startX
  const distanceY = endY - startY
  const startTime = new Date().getTime()

  duration = typeof duration !== 'undefined' ? duration : 400

  /* Easing function */
  const easeInOutQuart = (time, from, distance, duration) =>{
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from
  }

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime
    const newX = easeInOutQuart(time, startX, distanceX, duration)
    const newY = easeInOutQuart(time, startY, distanceY, duration)
    if (time >= duration) {
      clearInterval(timer)
    }
    window.scroll(newX, newY)
  }, 1000 / 60);
}
/* $(function(){
  //Abre e fecha menu
  $('.nav-toggle, .nav-close').click(function(e){
    e.preventDefault();
    $('.nav').toggleClass('active');
  });

  //Fixar header
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.header').addClass('fixed');
    }
    else{
      $('.header').removeClass('fixed');
    }
  });
}); */

//Abre e fecha menu com JavaScript
var navs = document.querySelectorAll('.nav-toggle, .nav-close')
navs.forEach(item =>{
  item.addEventListener('click', toggleToClassOnClick)
})

function toggleToClassOnClick(event) {
  event.preventDefault()
  let nav = document.querySelector('nav')
  nav.classList.toggle('active')
  console.log(event.target)
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
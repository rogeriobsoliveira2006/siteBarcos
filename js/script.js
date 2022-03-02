$(function(){
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
});
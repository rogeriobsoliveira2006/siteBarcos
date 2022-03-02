$(function(){
  //Abre e fecha menu
  $('.nav-toggle, .nav-close').click(function(e){
    e.preventDefault();
    $('.nav').toggleClass('active');
  });
});
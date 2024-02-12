
function checkScroll(){
  var startY = $('.navbar').height() * 2; 
  if($(window).scrollTop() > startY){
      $('.navbar').addClass("scrolled");
  }else{
      $('.navbar').removeClass("scrolled");
  }
}
if($('.navbar').length > 0){
  $(window).on("scroll load resize", function(){
      checkScroll();
  });
}

$(document).ready(function(){
  $('a[href*="#"]').click(function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

$(document).ready(function(){
  $('#contactForm').submit(function(event) {
    event.preventDefault();

    var name = $('#inputName').val().trim();
    var email = $('#inputEmail').val().trim();
    var message = $('#inputMessage').val().trim();

    if (name === '') {
      alert('Ingresa tu nombre.');
      return false; 
    }

    if (email.indexOf('@') === -1) {
      alert('Ingresa un correo valido.');
      return false; 
    }

    if (message === '') {
      alert('Ingresa tu consulta.');
      return false;
    }

    alert('Hemos recibido tu mensaje, te contestaremos pronto!');
    $('#contactForm')[0].reset();
  });
});
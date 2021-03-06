$(document).ready(()=>{
  $('#overlayDiv').delay(2000).queue(function (next) { 
    $('#logoDiv').slideUp(800);
    $(this).slideUp(1000, function () {
      $(this).hide();
    });
    next(); 
  });
});
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

let width = $(window).width();
if(width>730){
    $('#small').hide();
}

$('#small').on('click', ()=>{
    if($('#navigation').height()<250){
        $('#navigation').height('330');
        $('#mobilenav').removeClass('hidden');
    }else{
        $('#mobilenav').addClass('hidden');
        $('#navigation').height('100');
    }
});
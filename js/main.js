

// All JS/jQuery and AJAX goes inside this function
$(function () {

 


  //skills animation
  $('.bar').each(function () {
    // if(window.innerHeight){
    $(this).find('.bar-inner').animate({
      width: $(this).attr('data-width')
    }, 2000);
  // }
  });










}); //(jQuery);


// All JS/jQuery and AJAX goes inside this function
$(function () {

 
  $(function () {
    $(window).scroll(function () {

      var top = $(this).scrollTop();
      var changeSkills = $('.front-page').height() - $('.front-page-nav-bar').height();
      if (top > changeSkills) {
        $('.bar').each(function () {
          $(this).find('.bar-inner').animate({
            width: $(this).attr('data-width')
          }, 2000);
        });
      }
    });

  });











}); //(jQuery);
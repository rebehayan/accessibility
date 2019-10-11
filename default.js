$(document).ready(function(){

  (function tabs(){
    var nav = $('nav a');

    nav.on('click', function(){
      var idx = $(this).parent().index();
      var div = $('div').eq(idx);
      var div_offset = div.offset().top;

      $(this).parent().addClass('on');
      $(this).parent().siblings().removeClass('on');
      $('body, html').stop().animate({
        scrollTop:div_offset - 70
      }, 300);
    })

  })();

});

$(document).ready(function(){

  (function tabs(){
    var nav = $('nav a');
    var eachscroll = $('div').each(function(index){
      $(window).on('scroll', function(){
        var scr = $(this).scrollTop();
        var idx2 = $("div").eq(index).offset().top - 70;
        if( scr >= idx2 ){
          $('nav li').eq(index).addClass('on');
          $('nav li').eq(index).siblings().removeClass('on');
        }
        if( scr > 100){
          $('body').addClass('gra');
        }else {
          $('body').removeClass('gra');
        }
      });
    });
    nav.on('click', function(){
      var idx = $(this).parent().index();
      var div = $('div').eq(idx);
      var div_offset = div.offset().top;


      $(this).parent().siblings().removeClass('on');
      $(this).parent().addClass('on');
      $('body, html').stop().animate({
        scrollTop:div_offset - 70
      }, 300);
    });

/*
ul.ddd
li a href #aa
li a href #bb

anchors:['aa','bb']
menu:'.ddd'
*/

  })();
  // @media ( max-width:630px){
  //
  //  table.type1 tr { display:flex;  padding:40px 0 0; position:relative;}
  //  table.type1 thead { display:none;}
  //  table.type1 tr th { position:absolute; left:0; top:0; width:100%; text-align:center;}
  // table.type1 tr td {flex:2 0 auto; font-size:10px;}
  //
  // }
});

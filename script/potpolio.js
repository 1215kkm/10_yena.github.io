$('.gnb .nav li').click(function(){
  var naviP = $(this).attr('data-naviP');
  $('html,body').animate({scrollTop: $('#'+naviP).offset().top})
})

$('.menu p').click(function(){
  var datakind = $(this).attr('data-kind');
  $(this).addClass('on').siblings().removeClass('on')
  $('.design_img li').hide();
  $(this).parents('.p_left').find('.bg li.'+datakind).show().siblings().hide()
  $(this).parents('.p_left').find('.design_img li.'+datakind).show().siblings().hide()
});


let navPosi = $('.nav').offset().top;
let pageNPosi = $('.pageNum').offset().top;
let navH = $('.nav').height();
let winH = $(window).height();



$(window).scroll(function(){
  let scrT = $(window).scrollTop();
  let sec1T = $('#section1').offset().top;
  let sec2T = $('#section2').offset().top;
  let sec3T = $('#section3').offset().top;
  
  if(scrT >= navPosi-50){
    $('.nav').css({position:'fixed', top:50, left:53 /* top:scrT-navPosi+50 */});
    $('.line').css({position:'fixed', top:260, left:61 /* top:scrT-navPosi+navH+50 */});
    $('.main_text').removeClass('on');
    $('.sec1_bg1').removeClass('on');
    $('.sec1_bg2').removeClass('on');
    $('.sec1_bg3').removeClass('on');
  } else {
    $('.nav').css({position:'absolute', top:0, left:0})
    $('.line').css({position:'absolute', top:'100%', left:8});
    $('.main_text').addClass('on');
    $('.sec1_bg1').addClass('on');
    $('.sec1_bg2').addClass('on');
    $('.sec1_bg3').addClass('on');
  };
  
  if(scrT >= pageNPosi-winH/2+45){
    console.log((scrT - pageNPosi) + winH/2)
    $('.pageNum').css({top:scrT});
  } else {
    $('.pageNum').css({top:'1135px'});
  };


  if(scrT){
    $('.nav li').eq(0).css({background:'#fbd905'}).siblings().css({background:'none'})
  }
  if(scrT >= sec1T){
    $('.pageNum').text('01');
    $('.nav li').eq(1).css({background:'#fbd905'}).siblings().css({background:'none'})
  }
  if(scrT >= sec2T - 400){
    $('.pageNum').text('02')
    $('.nav li').eq(2).css({background:'#fbd905'}).siblings().css({background:'none'})
  }
  if(scrT >= sec3T - 600){
    $('.pageNum').text('03')
    $('.nav li').eq(3).css({background:'#fbd905'}).siblings().css({background:'none'})
  }

$('.nav li').eq(0).click(function(){
  $(window).scrollTop(scrT);
});


});

$('#section1 .button li.about_me').click(function(){
  $('#section1 .left .about_me').fadeIn(200).siblings().fadeOut(50)
  $(this).addClass('on').siblings().removeClass('on')
  proAni(false)
});
$('#section1 .button li.information').click(function(){
  $('#section1 .left .information').fadeIn(200).siblings().fadeOut(50)
  $(this).addClass('on').siblings().removeClass('on')
  proAni()
});
$('#section1 .button li.education').click(function(){
  $('#section1 .left .education').fadeIn(200).siblings().fadeOut(50)
  $(this).addClass('on').siblings().removeClass('on')
  proAni(false)
});
$('#section1 .button li.activity').click(function(){
  $('#section1 .left .activity').fadeIn(200).siblings().fadeOut(50)
  $(this).addClass('on').siblings().removeClass('on')
  proAni()
});
$('#section1 .button li.licence').click(function(){
  $('#section1 .left .licence').fadeIn(200).siblings().fadeOut(50)
  $(this).addClass('on').siblings().removeClass('on')
  proAni(false)
});
$('#section1 .button li.skills').click(function(){
  $('#section1 .left .skills').fadeIn(200).siblings().fadeOut(50)
  $(this).addClass('on').siblings().removeClass('on')
  proAni()
});

 function proAni(value){
   $('.progressbar').each(function(){
     if(value == false){
       $(this).find('span').animate({left:0+'%'}, 0)
     } else {
       let proVal = $(this).attr('data-pr');
       $(this).find('span').animate({left:proVal+'%'}, 700)
     }
   });

};

















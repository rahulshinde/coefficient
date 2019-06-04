$(document).ready(function(){
  height = parseInt($('#sizer').innerHeight() - $(window).height());
  width = parseInt($(window).width());
  site_document = $('#container'); 
  heading = $('#heading');
  site_document.on('scroll', blurHeading);
  $(window).on('resize', resizeHandler);
  fadeIn();
  blurHeading();
  setAspectRatio();
});

function fadeIn(){
  $('body').addClass('show');
}

function blurHeading(e){
  var scroll_position = $('#container').scrollTop();
  if (scroll_position >= height){
    $('#container').scrollTop(0);
  }
  var blur_percentage = Math.abs(scroll_position/height - 0.5) * 40;

  heading.css('filter', 'blur(' + blur_percentage + 'px)');
}

function resizeHandler(){
  height = parseInt($(document).height() - $(window).height());
  width = parseInt($(window).width());
  setAspectRatio();
}

function setAspectRatio(){
  console.log(height/width)
  if(height/width >= 2){
    $('body').removeClass('horizontal');
    $('body').addClass('vertical');
  } else{
    $('body').removeClass('vertical');
    $('body').addClass('horizontal');
  }
}
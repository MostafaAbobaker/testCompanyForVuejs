$(document).ready(function(){
  $(".card-left").click(function(){
    var Images = $(this).find('img').attr('data-src');
    var Heading = $(this).find('.heading').text();
    var Title = $(this).find('.title').text();
    $(this).closest('.our-team ').find('#mater-card').find('img').attr('src', Images);
    $(this).closest('.our-team ').find('#mater-card').find('.heading').text(Heading);
    $(this).closest('.our-team ').find('#mater-card').find('.title').text(Title);
  });
  
  
  // Start Count Up
  $('.count').countUp({
    delay: 10,
    time: 1500
  });
  // End Count UP
  // Start Slider Owl Carousel 
  $(".owl-carousel").owlCarousel({  
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
  /* Start Scroll Nav Bar */
 /*  $(window).scroll(function () {
    if($(this).scrollTop() > 100) {
      if (!$('.navbar').hasClass('fixed-top')) {
        $('.navbar').stop().addClass('fixed-top').css('top', '-50px').animate({
          'top': '0px'
        }, 500);
      }
    } else {
        $('.navbar').removeClass('fixed-top');
    }
  }); */
  /* End Scroll Nav Bar */
});

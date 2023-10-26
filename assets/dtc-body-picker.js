$(document).ready(function () {
    if ($(window).width() < 960) {
      
      $('.body_picker').addClass('body_style_picker_scroller');
    }
    else {
      $('.body_picker').addClass('body_picker_with_slider');
      slickify();
    }
    
    function slickify() {
      $('.body_picker_with_slider').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        vertical: false,
        arrows: true,
        prevArrow: $('.prev-body-picker'),
        nextArrow: $('.next-body-picker'),
        responsive: [
          {
            breakpoint: 968,
            settings: "unslick"
          }
        ]
      });
      
    }
    
    $(window).on('resize', function () {
      var win = $(this); //this = window
      if (win.width() >= 960) {
        console.log('screen bigger than 960px;')
        $('.body_picker').addClass('body_picker_with_slider');
        $('.body_picker').removeClass('body_style_picker_scroller');
        slickify();
      } else {
        $('.body_picker').removeClass('body_picker_with_slider');
        $('.body_picker').addClass('body_style_picker_scroller');
        slickify();
      }
    });
  });

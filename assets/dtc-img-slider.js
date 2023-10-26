  function isMobileDevice() {
    return window.innerWidth < 768;
  }

  if (isMobileDevice()) {
    $(document).ready(function() {
      $('.dtc-img-slider').each(function() {
        var $slider = $(this).slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        });

        $slider.on('init reInit afterChange', function(event, slick, currentSlide) {
          var $dots = $(this).find('.slick-dots li button');
          $dots.removeClass('slick-active');
          $dots.eq(currentSlide).addClass('slick-active').focus();
        });

        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
          var $dots = $(this).find('.slick-dots li button');
          $dots.removeClass('slick-active');
          $dots.eq(nextSlide).addClass('slick-active').focus();
        });
      });
    });
  }

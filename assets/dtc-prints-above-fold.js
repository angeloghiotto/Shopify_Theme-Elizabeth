/*
  ----------- Script for DTC Prints Above Fold Experiment -----------

  this script modifies the scrolling behavior on the X axis to 
  add or remove a class when the user reaches the end of the scrolling. 
  it also checks when the screen size is greater than 768px to add
  the slick-slider snippet

  //sbp = shop by print

*/

 

$(document).ready(function () {
    const $sbpContent = $(".dtc-sbp-content");
    const $sbpPrintContainer = $(".dtc-above-fold-print-container");
    const min_desktop_pixels = 768;
  
    
    
    //it first checks weather is desktop 
    runSlickSlider(min_desktop_pixels);
    
    //get dimensions of sbp content on scroll
    $sbpContent.on("scroll", function () {
      let $width = $sbpContent.outerWidth();
      let $scrollWidth = $sbpContent[0].scrollWidth;
      let $scrollLeft = $sbpContent.scrollLeft();
  
      // add or remove class
      parseInt($scrollWidth - $width) === parseInt($scrollLeft)
        ? $sbpPrintContainer.removeClass("dtc-above-fold-bg")
        : $sbpPrintContainer.addClass("dtc-above-fold-bg");
    });
    
    $(window).resize(function() {
      runSlickSlider(min_desktop_pixels);
    });
  });
  
  //runs slick slider only if the screen width is > min_desktop_pixels
  function runSlickSlider(min_desktop_pixels){
  
    if (window.innerWidth > min_desktop_pixels) {
  
      //copies product svg arrows and adds them the needed slider
      const left_arrow = $('.product__photos .slick-prev').html();
      const right_arrow= $('.product__photos .slick-next').html();
      $('.dtc-sbp-content .slick-prev').html = left_arrow;
      $('.dtc-sbp-content .slick-next').html = right_arrow;
  
      $('.dtc-sbp-content').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        variableWidth: true,
        arrows:true,
        responsive: [
          {
            breakpoint: 768,
            settings: "unslick"
          }
      ]
      });
    }
  }
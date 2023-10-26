$(document).ready(function() {
  setTimeout(function() {
    let thumbs = Array.from(document.querySelectorAll('.product__thumb-item.dtc-mobile-thumb'));
    let thumbSlider = document.querySelector('.product__thumbs');
    
    function clearThumbs() {
      thumbs.forEach(thumb => thumb.style.border = "2px solid transparent");
    }

    function selectThumb(index = 0, direction) {
      clearThumbs();
      let selectedThumb = thumbs.find(thumb => thumb.dataset.index == index);
      let isLastSlide = selectedThumb.dataset.index == thumbs.length - 1;
      let screen = window.screen.width;
      let thumbWidth = selectedThumb.getBoundingClientRect().width;
      let thumbPosition = selectedThumb.getBoundingClientRect().x;
      let isVisible = thumbPosition > 0 && thumbPosition <= (screen - thumbWidth);
      if (!isVisible && direction == 'left') {
        thumbSlider.scrollLeft = thumbSlider.scrollLeft + thumbPosition;
      } else if (!isVisible && direction == 'right' && !isLastSlide){
        thumbSlider.scrollLeft = thumbSlider.scrollLeft - Math.abs(thumbPosition);
      } else if (!isVisible && isLastSlide) {
        thumbSlider.scrollLeft = thumbPosition;
      }
      selectedThumb.style.border = "2px solid black";
    }

    const printDiv = document.querySelector('#print-div')
    if ($('.dtc-print-detail-mobile').length) {
      $('.dtc-print-detail-mobile').on('click', function() {
        var lastSlideId = $('[id^="slick-slide"]').last().attr('id');
        $("#" + lastSlideId).click(); 
        const lastSlideIndex = thumbs.length - 1;
        const lastSlideThumb = thumbs[lastSlideIndex];
        const lastSlideIndexValue = parseInt(lastSlideThumb.dataset.index, 10);
        
        const currentSlideIndex = $('.slick-current').data('index');
        const direction = lastSlideIndexValue > currentSlideIndex ? 'right' : 'left';
        
        selectThumb(lastSlideIndexValue, direction);
      });
    }

    if ($('.dtc-print-detail').length) {
      $('.dtc-print-detail').on('click', function(e) {
        var lastThumbItem = $(".product__thumb-item").last();
        lastThumbItem.click();
      });
    }

    
  }, 2500);
});
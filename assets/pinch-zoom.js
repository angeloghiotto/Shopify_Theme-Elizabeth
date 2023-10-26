window.addEventListener('load', () => {
  const images = [...document.querySelectorAll(".zoom-images")];
  const content = document.querySelector(".zoom-images-content");
  const imagesThumbnails = document.querySelector(".product__thumbs");
  const modal = document.querySelector('.pinch-zoom-modal');
  const sideImagesContainer = [...document.querySelectorAll('.slick-slide')];
  const slideImages = [...document.querySelectorAll(".lazyloaded")];
  const magnifyingGlassIcon = [...document.querySelectorAll('.product__photo-zoom')];

  //remove animtation after 1st render
  slideImages.forEach(image => {
    image.classList.remove('lazyloaded');
    image.style.opacity = '1';
  })

  images.map(image => {
    const pinchZoom = (image) => {
      let imageElementScale = 1;
    
      let start = {};
    
      // Calculate distance between two fingers
      const distance = (event) => {
        return Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY);
      };
    
      image.addEventListener('touchstart', (event) => {
        if (event.touches.length === 2) {
          event.preventDefault(); // Prevent page scroll
          // Calculate where the fingers have started on the X and Y axis
          start.x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
          start.y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
          start.distance = distance(event);
        }
      });
    
      image.addEventListener('touchmove', (event) => {
        if (event.touches.length === 2) {
          event.preventDefault(); // Prevent page scroll
          let scale;
          // Safari provides event.scale as two fingers move on the screen
          // For other browsers just calculate the scale manually
          if (event.scale) {
            scale = event.scale;
          } else {
            const deltaDistance = distance(event);
            scale = deltaDistance / start.distance;
          }
    
          imageElementScale = Math.min(Math.max(1, scale), 4);
    
          // Calculate how much the fingers have moved on the X and Y axis
          const deltaX = (((event.touches[0].pageX + event.touches[1].pageX) / 2) - start.x) * 2; // x2 for accelarated movement
          const deltaY = (((event.touches[0].pageY + event.touches[1].pageY) / 2) - start.y) * 2; // x2 for accelarated movement
    
          // Transform the image to make it grow and move with fingers
          const transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${imageElementScale})`;
          image.style.transform = transform;
          image.style.WebkitTransform = transform;
          image.style.position = "absolute";
          image.style.marginTop = "100px";
          image.style.zIndex = '9999999999';
          content.style.marginTop = '289px';  
          imagesThumbnails.style.display = "none";
          modal.style.display = 'block';
          sideImagesContainer.forEach(sideImg => {
            if(!sideImg.classList.contains('slick-current'))
            sideImg.style.visibility = 'hidden';
          })
          magnifyingGlassIcon.forEach(icon => {
            icon.style.display = 'none';
          })
        }

     
      });
    
      image.addEventListener('touchend', (event) => {
        // Reset image to it's original format
        image.style.transform = "";
        image.style.WebkitTransform = "";
        image.style.zIndex = "";
        image.style.position = "relative";
        image.style.marginTop = "0px";
        imagesThumbnails.style.display = "flex";
        content.style.marginTop = '0px';
        modal.style.display = 'none';
        sideImagesContainer.forEach(sideImg => {
          sideImg.style.visibility = 'visible';
        })
        magnifyingGlassIcon.forEach(icon => {
          icon.style.display = 'block';
        })
      });
    }
  
    pinchZoom(image)
  })
})

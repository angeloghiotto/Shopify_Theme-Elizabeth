function toggleAddToCartButton(elem){

  let addToCartBtn = document.querySelectorAll('.cart-button');
    
  for(let i = 0; i < addToCartBtn.length; i++){
      if(elem.hasAttribute("soldout")){
        addToCartBtn[i].classList.add('disabled');
        addToCartBtn[i].innerHTML = 'SOLDOUT';
        addToCartBtn[i].setAttribute('disabled', 'disabled');
       } else {
        addToCartBtn[i].classList.remove('disabled');
        addToCartBtn[i].innerHTML = 'ADD TO CART';
        addToCartBtn[i].removeAttribute('disabled');
       }
     } 
  }
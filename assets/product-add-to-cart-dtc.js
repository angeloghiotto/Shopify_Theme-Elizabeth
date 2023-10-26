function submitQuickAddToCart (e) {
  var $quickSingle = $(e.currentTarget);
  if ($quickSingle.hasClass('quick-add-single')) {
    let $form = $(e.currentTarget).parent().find('form[action="/cart/add"]');
    triggerAjaxAddToCart($form);
  } else {
    if ($(e.currentTarget).val() !== '') {

      let $form = $(e.currentTarget).parent().parent().parent();
      let values = [];
      
      let product_with_variants = [...document.querySelectorAll('.variant-input__value')];
      let count_select_boxes = $($form).children('.variant-wrapper').length;

      let selectedVariant;
 
      if($(e.currentTarget).hasClass('pop-over-single-quick-add')){
        selectedVariant = $(e.currentTarget).siblings('.input-quantity')[0].children[0];
      } else {
        selectedVariant = product_with_variants.filter(function(v) {
          return +v.value === +e.currentTarget.value
        }).shift() || undefined;
      }

      pickRightVariant(e.currentTarget, +selectedVariant.value).then(function () {

        if (count_select_boxes > 1) {
    
          $($form).children('.variant-wrapper').each(function () {
            let value = $(e.currentTarget).children('.variant-input-wrap').children('select').find(":selected").text().trim();
       
            values.push(value);
          });
        
          let color = values[0];
          let size = values[1];
        
          for (let i = 0; i < product_with_variants.length; i++) {
            if (product_with_variants[i].option1 == color && product_with_variants[i].option2 == size) {
              $('#ProductSelect-' + section_id + '_product-grid').val(product_with_variants[i].id);
              break;
            }
          }
        } else {
          triggerAjaxAddToCart($form, +selectedVariant.value);
        }
      }).catch(function (error) {
        console.error('::: Error: ', error);
      });
    }
  }
}

function pickRightVariant(ele, val) {
  return new Promise(function (resolve, reject) {
    var executed = $(ele)
      .parent()
      .parent()
      .parent()
      .find('[name="id"]')
      .val(val);
    
    if (executed.length) {

      resolve("Element was changed.");
    } else {
      reject("There wasn't element to change.");

    }
  })
}

function triggerAjaxAddToCart ($form, val) {
  let $addToCart = $form.find('.add-to-cart');

  return window.theme.cart.addItemFromForm($($form).serialize() + `&id=${val}`).then(function(product) {
    $form.find('.errors').remove();

    const $drawer = new window.theme.CartDrawer();

    window.theme.cart.getCart().then(function (cart) {
      $drawer.buildCart(cart, true);
    });
  }).catch(function(XMLHttpRequest) {
    $form.find('.errors').remove();
    
    if (XMLHttpRequest.responseJSON && XMLHttpRequest.responseJSON.description)
      $form.prepend('<div class="errors text-center">' + XMLHttpRequest.responseJSON.description + '</div>');
  });
}
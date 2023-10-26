let y_axis_add_to_cart = $(".add-to-cart").offset().top;
let fake_add_to_cart_btn = $(".fake-add-to-cart-button");
let variant_should_be_visible = false;
let form = $("#dtc-form");
let variant_wrapper = $(".variant-wrapper");
let element_to_add_margin = $(".product-single__title");
let add_to_cart_button = $(".add-to-cart");
let top_window = 0;
let show_sticky_bar = false;
let close_variant = $(".close-variant-sticky-form");
let height_of_form = form.height();
let hasVariants = true;
isMobile = isMobile();


if(variant_wrapper.length == 0){
  hasVariants = false;
  $("html #dtc-form form").css("width",'100%');
}


$(document).ready(function () {
  if (isMobile) {
    $(window).on("scroll", () => {
      top_window = $(window).scrollTop();
      show_sticky_bar = y_axis_add_to_cart  < top_window ? true : false;
      show_sticky_bar ? showStickyBar() : hideStickyBar();

      if (form.hasClass("dtc-sitcky-form") & hasVariants == true ) {
        showFakeButton();
      } else {
        showOriginalButton();
      }
    });
  }

  close_variant.click(function () {
    closeVariantWindow();
  });

  add_to_cart_button.click(function () {
    $(".sticky-atc-overlay").hide();
    fake_add_to_cart_btn.show();
    variant_should_be_visible = false;
    hideVarientWrapper();
    enableScrolling();

  if (form.hasClass("dtc-sitcky-form")) {
      fake_add_to_cart_btn.show();
      add_to_cart_button.hide();
    } else {
      fake_add_to_cart_btn.hide();
      add_to_cart_button.show();
    }
    $(window).scrollTop($(window).scrollTop() + 1);
  });

  fake_add_to_cart_btn.click(function () {
    variant_should_be_visible = true;
    if (show_sticky_bar === true && variant_should_be_visible === true) {
      $(this).hide();
      add_to_cart_button.show();
      $(".sticky-atc-overlay").show();
      showVariantWrapper();
      disableScrolling();
    }
  });
});






// $(".variant__button-label").click(function (e) {
//   variant_id = getParameterByName("variant");

//   let found_variant = meta.product.variants.filter((x) => x.id == variant_id);
//   let variant_price = theme.Currency.formatMoney(
//     found_variant[0].price,
//     theme.settings.moneyFormat
//   );
//   $(".variant-price-dtc").html(variant_price);
// });





function isMobile() {
  return (screen_size_mobile = $(window).width() < 500);
}

function getParameterByName(name) {
  var match = RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}

function showStickyBar() {
  form.addClass("dtc-sitcky-form");
  addMarginToElement();
  hideVarientWrapper();
  fake_add_to_cart_btn.show();
  add_to_cart_button.hide();
}

function hideStickyBar() {
  form.removeClass("dtc-sitcky-form");
  removeMarginToElement();
  showVariantWrapper();
  add_to_cart_button.show();
}

function addMarginToElement() {
  element_to_add_margin.css("margin-top", height_of_form);
}
function removeMarginToElement() {
  element_to_add_margin.css("margin-top", 0);
}

function hideVarientWrapper() {
  if(isMobile){
    variant_wrapper.hide();
  }
}

function showVariantWrapper() {
  variant_wrapper.show();
}

function disableScrolling() {
  $("body").addClass("stop-scrolling");
  close_variant.css("display", "flex");
}

function enableScrolling() {
  $("body").removeClass("stop-scrolling");
  close_variant.hide();
}
function showFakeButton(){
  fake_add_to_cart_btn.show();
  add_to_cart_button.hide();
}

function showOriginalButton(){
  fake_add_to_cart_btn.hide();
  add_to_cart_button.show();
}




function closeVariantWindow(){
  $(".sticky-atc-overlay").hide();
  fake_add_to_cart_btn.show();
  add_to_cart_button.hide();
  variant_should_be_visible = false;
  hideVarientWrapper();
  enableScrolling();
}
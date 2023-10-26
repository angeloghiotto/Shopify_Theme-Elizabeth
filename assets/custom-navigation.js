$(document).ready(function () {
  $(".has_submenu").click(function () {
    $(".mobile-nav__social").hide();
    let item = $(this);

    if (item.hasClass("dtc_menu_active")) {
    } else {
      $(".dtc_mobile_navigation").css("right", -460);
      $(".dtc_mobile_navigation").animate({ right: "0" });
    }

    let label = $(this).children("a").text();
    let collection_url = $(this).children("a").attr("data-link");
    $("#shop_all_dtc").attr("href", collection_url);
    $(".dtc_mobile_collection_name").html(label);
    $(".menu-item").hide();
    $(".mobile_menu_header").show();
    $(".dtc_main_menu_item").hide();
    $(this).addClass("dtc_menu_active");
    $(this).children(".dtc_submenu").show();
  });

  $(".dtc_mobile_menu_back").click(function () {
    $(".mobile-nav__social").show();
    $(".mobile_menu_header").hide();
    $(".has_submenu").removeClass("dtc_menu_active");
    $(".has_submenu").children(".dtc_submenu").hide();
    $(".dtc_main_menu_item").show();

    $(".dtc_mobile_navigation").css("right", 500);
    $(".dtc_mobile_navigation").animate({ right: "0" });
  });

  $(".accordion").click(function () {
    let element = $(this);
    if ($(this).hasClass("accordion_open")) {
      close_accordion(element);
    } else {
      open_accordion(element);
    }
  });
});
function close_accordion(element) {
  $(element).removeClass("accordion_open");
  $(element)
    .children(".accordion_item")
    .children(".accordion_item_image")
    .removeClass("rotated");
  $(element).children(".accordion_content").css("opacity", 0).slideUp();
}

function open_accordion(element) {
  $(element)
    .children(".accordion_item")
    .children(".accordion_item_image")
    .addClass("rotated");
  $(element).addClass("accordion_open");
  $(element).children(".accordion_content").slideDown().css("opacity", 1);
}

import "bootstrap";
import "./styles.scss";
import "normalize.css";
import $ from "jquery";
import "slick-carousel";

$(function () {
  $(document).on("click", ".pv-header__burgerBtn", function () {
    $(this).toggleClass("pv-header__burgerBtn_open");
    $(".pv-mobileMenu").toggleClass("show");
    $(".pv-contentWrap").toggleClass("open");
  });

  $(document).on("click", ".pv-header__cityInfo", function () {
    $(this).toggleClass("pv-header__cityInfo_open");
  });

  $(document).on("click", ".pv-nav__searchBtn", function () {
    const input = $(".pv-nav__search .pv-nav__searchInput");

    if (input.width() === 0) {
      input.addClass("open");
    } else {
      input.removeClass("open");
    }
  });

  $(document).on("click", ".dropdownBtn", function () {
    var sub = $(this).next();

    if (!sub.is(":visible")) {
      sub.slideDown(300);
    } else {
      sub.slideUp(300);
    }
  });

  $(document).on("click", ".pv-mobileSearchBtn", function () {
    var sub = $(".pv-mobileSearch");

    if (!sub.is(":visible")) {
      sub
        .css("display", "flex")
        .hide()
        .fadeIn(300);
    } else {
      sub.fadeOut(300);
    }
  });

});
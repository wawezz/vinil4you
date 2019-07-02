import "../../components/base/base";
import "./styles.scss";
import { CountUp } from "countup.js";
import IMask from "imask";

var element = document.getElementById("phone-mask");
var element2 = document.getElementById("phone-mask2");
var maskOptions = {
  mask: "+{7} (000) 000-00-00"
};
var mask = IMask(element, maskOptions);
var mask = IMask(element2, maskOptions);

$(".pv-feedback__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    // {
    //     breakpoint: 1200,
    //     settings: {
    //         slidesToShow: 4
    //     }
    // },
    // {
    //     breakpoint: 980,
    //     settings: {
    //         slidesToShow: 3,
    //         dots: false,
    //         prevArrow: false,
    //         nextArrow: false
    //     }
    // },
    // {
    //     breakpoint: 740,
    //     settings: {
    //         slidesToShow: 2,
    //         dots: false,
    //         prevArrow: false,
    //         nextArrow: false
    //     }
    // },
    // {
    //     breakpoint: 500,
    //     settings: {
    //         slidesToShow: 1,
    //         dots: false,
    //         prevArrow: false,
    //         nextArrow: false
    //     }
    // }
  ]
});

$(window).scroll(function() {
  animateItem();
  testScroll();
});

var about = $(".pv-about");
var card = $(".pv-card .pv-card__slogan");

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function testScroll() {
  if (isScrolledIntoView(about) && !about.hasClass("viewed")) {
    about.addClass("viewed");

    $(".counter-value").each(function(index) {
      var countUp = new CountUp(
        "counter_" + index,
        $(this).attr("data-count"),
        {
          duration: 7,
          useEasing: true,
          separator: " "
        }
      );

      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    });
  }

  if (isScrolledIntoView(card) && !card.hasClass("viewed")) {
    card.addClass("viewed");

    $(".pv-card .slide").each(function() {
      $(this).addClass("mg-l0");
    });
  }
}

function animateItem() {
  $(".pv-ourDiff__wrap .pv-ourDiff__item").each(function(index) {
    if (!$(this).hasClass("fadeInUp")) {
      var e = $(this).offset().top;
      var _this = $(this);
      if ($(this).hasClass("pv-ourDiff__item")) {
        setTimeout(function() {
          $(window).scrollTop() > e - $(window).height() &&
            _this.addClass("fadeInUp");
        }, 300 * index);
      } else {
        $(window).scrollTop() > e - $(window).height() &&
          $(this).addClass("fadeInUp");
      }
    }
  });

  $(
    ".pv-about__item .pv-about__item_text, .pv-bap__banner .pv-bap__banner_form"
  ).each(function() {
    if (!$(this).hasClass("fadeIn")) {
      var e = $(this).offset().top;
      $(window).scrollTop() > e - $(window).height() &&
        $(this).addClass("fadeIn");
    }
  });

  $(".pv-wyg__item:nth-child(2n) .pv-wyg__item_img-wrapper").each(function() {
    if (!$(this).hasClass("fadeInLeft")) {
      var e = $(this).offset().top;
      $(window).scrollTop() > e - $(window).height() &&
        $(this).addClass("fadeInLeft");
    }
  });

  $(".pv-wyg__item:odd .pv-wyg__item_img-wrapper").each(function() {
    if (!$(this).hasClass("fadeInRight")) {
      var e = $(this).offset().top;
      $(window).scrollTop() > e - $(window).height() &&
        $(this).addClass("fadeInRight");
    }
  });

  $(".pv-wyg__item:odd .pv-wyg__item_data").each(function() {
    if (!$(this).hasClass("fadeInLeft")) {
      var e = $(this).offset().top;
      $(window).scrollTop() > e - $(window).height() &&
        $(this).addClass("fadeInLeft");
    }
  });

  $(".pv-wyg__item:nth-child(2n) .pv-wyg__item_data").each(function() {
    if (!$(this).hasClass("fadeInRight")) {
      var e = $(this).offset().top;
      $(window).scrollTop() > e - $(window).height() &&
        $(this).addClass("fadeInRight");
    }
  });

  $(".pv-bap__step_wrap .pv-bap__step_item").each(function(index) {
    var e = $(this).offset().top;
    var _this = $(this);
    if (!$(this).hasClass("fadeInLeft")) {
      setTimeout(function() {
        $(window).scrollTop() > e - $(window).height() &&
          _this.addClass("fadeInLeft");
      }, 400 * index);
    }
  });

  // $(".pv-ourDiff__wrap .pv-ourDiff__item").each(function() {
  //   var e = $(this).offset().top;
  //   $(window).scrollTop() > e - $(window).height() &&
  //     $(this).addClass("flipInY");
  // });
}

$(document).ready(function() {
  $(".pv-topPartner").addClass("pv-topPartner_show");

  setTimeout(function() {
    $(".pv-topPartner__wrap .pv-topPartner__title").addClass("showFade");
  }, 400);

  setTimeout(function() {
    $(".pv-topPartner__wrap .pv-topPartner__text").addClass("showFade");
  }, 900);

  setTimeout(function() {
    $(".pv-topPartner__wrap .pv-topPartner__form").addClass("showFade");
  }, 1400);

  setTimeout(function() {
    $(".pv-topPartner__wrap .pv-topPartner__info").addClass("showFade");
  }, 1900);
});

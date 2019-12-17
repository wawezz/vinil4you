import "../../components/base/base";
import "./styles.scss";

$(function() {
  var activeDeliveryRadio = "__1";
  var assideTop = $(".pv-orderAside").offset().top;
  var assideHeight = $(".pv-orderAside").height();
  var footerTop = $(".pv-footer").offset().top;
  var container = $(".container");

  $(window).resize(function() {
    assideTop = $(".pv-orderAside").offset().top;
    assideHeight = $(".pv-orderAside").height();
    footerTop = $(".pv-footer").offset().top;
  });

  $(window).scroll(function() {
    if (container.width() < 1140) return;

    var currentScroll = $(window).scrollTop();
    if (currentScroll >= assideTop) {
      if (!$(".pv-orderAside").hasClass("fixed")) {
        $(".pv-orderAside").addClass("fixed");
        $(".pv-orderAside__wrap").css({
          right: ($(window).width() - 1140) / 2 - 15 + "px"
        });
      }
    } else {
      if ($(".pv-orderAside").hasClass("fixed")) {
        $(".pv-orderAside").removeClass("fixed");
        $(".pv-orderAside__wrap").css({
          right: 0
        });
      }
    }

    if (currentScroll >= footerTop) {
      $(".pv-orderAside__wrap")
        .data("scrolled", true)
        .css({
          top: -(currentScroll + assideHeight - footerTop)
        });
    } else {
      if ($(".pv-orderAside__wrap").data("scrolled")) {
        $(".pv-orderAside__wrap")
          .data("scrolled", false)
          .css({
            top: 0
          });
      }
    }
  });

  $(document).on("click", ".pv-orderDelivery__radioBtn", function() {
    var active = $(this).data("var");
    if (!active) return;

    changeRadio("__" + active);
  });

  $(document).on("click", ".pv-orderConfirmSale", function() {
    var form = $(this).parents(".pv-orderSale__form");
    var input = form.find(".pv-orderBlockInput");
    var val = form.find(".pv-orderSale__editVal");

    if (!input.val()) return;

    val.text(input.val());
    form.removeClass("active");
  });

  $(document).on("click", ".pv-orderSale__cancel", function() {
    var form = $(this).parents(".pv-orderSale__form");
    form.addClass("active");
  });

  $(document).on("click", ".pv-orderPayment__radioBtn", function() {
    $(".pv-orderPayment__radioBtn").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on("click", ".pv-orderAside__rowsNav", function() {
    $(this)
      .parent(".pv-orderAside__box")
      .toggleClass("show");
  });

  $(document).on("click", ".pv-deliverySelf__modalHead-listView", function() {
    var modal = $(".pv-deliverySelf__modal");

    if (modal.hasClass("list")) return;
    if (modal.hasClass("map")) modal.removeClass("map");

    modal.addClass("list");
  });

  $(document).on("click", ".pv-deliverySelf__modalHead-mapView", function() {
    var modal = $(".pv-deliverySelf__modal");

    if (modal.hasClass("map")) return;
    if (modal.hasClass("list")) modal.removeClass("list");

    modal.addClass("map");
  });

  changeRadio();
});

function changeRadio(active = "__1") {
  if (!active) return;

  $(".pv-orderDelivery__radio").removeClass("active");
  $(".pv-orderDelivery__radio" + active).addClass("active");
}

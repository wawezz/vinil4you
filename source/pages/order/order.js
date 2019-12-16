import "../../components/base/base";
import "./styles.scss";

$(function () {
    var assideTop = $('.pv-orderAside').offset().top;
    var assideHeight = $('.pv-orderAside').height();
    var footerTop = $('.pv-footer').offset().top;
    var container = $('.container');

    $(window).resize(function () {
        assideTop = $('.pv-orderAside').offset().top;
        assideHeight = $('.pv-orderAside').height();
        footerTop = $('.pv-footer').offset().top;
    });

    $(window).scroll(function () {

        if (container.width() < 1140) return;

        var currentScroll = $(window).scrollTop();
        if (currentScroll >= assideTop) {
            if (!$('.pv-orderAside').hasClass("fixed")) {
                $('.pv-orderAside').addClass('fixed');
                $('.pv-orderAside__wrap').css({
                    right: (($(window).width() - 1140) / 2) - 15 + "px"
                });
            }
        } else {
            if ($('.pv-orderAside').hasClass("fixed")) {
                $('.pv-orderAside').removeClass('fixed');
                $('.pv-orderAside__wrap').css({
                    right: 0,
                });
            }
        }

        if (currentScroll >= footerTop) {
            $('.pv-orderAside__wrap').data('scrolled', true).css({
                top: -(currentScroll + assideHeight - footerTop)
            });
        } else {
            if ($('.pv-orderAside__wrap').data('scrolled')) {
                $('.pv-orderAside__wrap').data('scrolled', false).css({
                    top: 0
                });
            }
        }
    });
});
import "../../components/base/base";
import "./styles.scss";

$(function () {

    $('.pv-product__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.pv-product__sliderNav'
    });

    $('.pv-product__sliderNav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.pv-product__slider',
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: true
    });

    $(".pv-mainSliderNav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".pv-mainAnalog").slick(getProductsSliderSettings());
    $(".pv-mainAcsesuar").slick(getProductsSliderSettings());
    $(".pv-mainLike").slick(getProductsSliderSettings());


    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).data("slider");
        $("." + target).slick('resize');
    });


    $(document).on("click", ".pv-product__stock_head-listView", function () {
        var stockWrap = $(".pv-product__stock_wrap");

        if (stockWrap.hasClass("list")) return;
        if (stockWrap.hasClass("map")) stockWrap.removeClass("map");

        stockWrap.addClass("list");
    });

    $(document).on("click", ".pv-product__stock_head-mapView", function () {
        var stockWrap = $(".pv-product__stock_wrap");

        if (stockWrap.hasClass("map")) return;
        if (stockWrap.hasClass("list")) stockWrap.removeClass("list");

        stockWrap.addClass("map");
    });

    var assideTop = $('.pv-product__asside').offset().top;
    var container = $('.container');

    $(window).resize(function () {
        assideTop = $('.pv-product__asside').offset().top;
    });

    $(window).scroll(function () {

        if (container.width() < 1140) return;

        var currentScroll = $(window).scrollTop();
        if (currentScroll >= assideTop) {
            console.log($(window).width())
            $('.pv-product__asside').addClass('fixed');
            $('.pv-product__asside_wrap').css({
                right: (($(window).width() - 1140) / 2) - 15 + "px"
            });
        } else {
            if ($('.pv-product__asside').hasClass("fixed")) {
                $('.pv-product__asside').removeClass('fixed');
                $('.pv-product__asside_wrap').css({
                    right: 0
                });
            }
        }

    });
});

function getProductsSliderSettings() {
    return {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
}
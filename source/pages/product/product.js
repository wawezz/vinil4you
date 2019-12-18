import "../../components/base/base";
import "./styles.scss";
import PerfectScrollbar from 'perfect-scrollbar';

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
    var assideHeight = $('.pv-product__asside').height();
    var footerTop = $('.pv-footer').offset().top;
    var container = $('.container');

    $(window).resize(function () {
        assideTop = $('.pv-product__asside').offset().top;
        assideHeight = $('.pv-product__asside').height();
        footerTop = $('.pv-footer').offset().top;
    });

    $(window).scroll(function () {

        if (container.width() < 1140) return;

        var currentScroll = $(window).scrollTop();
        if (currentScroll >= assideTop) {
            if (!$('.pv-product__asside').hasClass("fixed")) {
                $('.pv-product__asside').addClass('fixed');
                $('.pv-product__asside_wrap').css({
                    right: (($(window).width() - 1140) / 2) - 15 + "px"
                });
            }
        } else {
            if ($('.pv-product__asside').hasClass("fixed")) {
                $('.pv-product__asside').removeClass('fixed');
                $('.pv-product__asside_wrap').css({
                    right: 0,
                });
            }
        }

        if (currentScroll + assideHeight >= footerTop) {
            $('.pv-product__asside_wrap').data('scrolled', true).css({
                top: -(currentScroll + assideHeight - footerTop)
            });
        } else {
            if ($('.pv-product__asside_wrap').data('scrolled')) {
                $('.pv-product__asside_wrap').data('scrolled', false).css({
                    top: 0
                });
            }
        }
    });

    var pvInfoNav = document.querySelector('.pv-product__allInfo_nav');
    var pvExamplesNav = document.querySelector('.pv-product__examplesNav');
    var pvProductsNav = document.querySelector('.pv-mainProducts__nav');

    var ps = new PerfectScrollbar(pvInfoNav, {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 1,
        useBothWheelAxes: true,
        swipeEasing: true
    });

    var ps = new PerfectScrollbar(pvExamplesNav, {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 1,
        useBothWheelAxes: true,
        swipeEasing: true
    });

    var ps = new PerfectScrollbar(pvProductsNav, {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 1,
        useBothWheelAxes: true,
        swipeEasing: true
    });

    initComparisons();

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
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    }
}

function initComparisons() {
    var x, i;

    x = document.getElementsByClassName("pv-product__carOverlay");
    for (i = 0; i < x.length; i++) {
        compareImages(x[i]);
    }

    function compareImages(img) {
        var slider, img, clicked = 0,
            w, h;

        w = img.offsetWidth;
        h = img.offsetHeight;

        img.style.width = (w / 2) + "px";

        slider = document.createElement("div");
        slider.setAttribute("class", "pv-product__carSlider");

        img.parentElement.insertBefore(slider, img);

        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

        slider.addEventListener("mousedown", slideReady);
        window.addEventListener("mouseup", slideFinish);
        slider.addEventListener("touchstart", slideReady);
        window.addEventListener("touchstop", slideFinish);

        function slideReady(e) {
            e.preventDefault();
            clicked = 1;

            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        function slideFinish() {
            clicked = 0;
        }

        function slideMove(e) {
            var pos;

            if (clicked == 0) return false;
            pos = getCursorPos(e)

            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            slide(pos);
        }

        function getCursorPos(e) {
            var a, x = 0;
            e = e || window.event;

            a = img.getBoundingClientRect();
            x = e.pageX - a.left;

            x = x - window.pageXOffset;
            return x;
        }

        function slide(x) {

            img.style.width = x + "px";
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}
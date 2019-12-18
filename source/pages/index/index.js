import "../../components/base/base";
import "../../components/brands/brands";
import "./styles.scss";
import PerfectScrollbar from 'perfect-scrollbar';

var carImage = 1;

$(function () {

    $(".pv-mainTopBanner_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: false,
    });

    $(".pv-mainSliderNav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        initialSlide: 2,
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
    $(".pv-mainVideoSlider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        centerMode: false,
        dots: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });
    $(".pv-mainFeedbacks__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: false,
        dots: true
    });
    $(".pv-mainFullBanners").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: false,
        dots: true
    });

    $(".pv-saleSlider").slick(getProductsSliderSettings());
    $(".pv-newSlider").slick(getProductsSliderSettings());
    $(".pv-hitSlider").slick(getProductsSliderSettings());

    $(".pv-newsSlider").slick(getPostsSliderSettings());
    $(".pv-postsSlider").slick(getPostsSliderSettings());
    $(".pv-offersSlider").slick(getPostsSliderSettings());

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).data("slider");
        $("." + target).slick('resize');
    });


    $('.pv-mainSliderMobile__more').click(function () {
        $(this).toggleClass('open');
        $(this).prev().toggleClass('show');
    });

    $('.pv-mainSliderNav__itemImg_plenki').mouseenter(function () {
        if ($(".pv-car").is(":hidden")) return;

        changeCarBg('kuzov_colors', 8);
    });

    // $('.pv-mainSliderNav__itemImg_plenki').mouseleave(function () {
    //     clearTimeout(carTimeout);
    // });

    $('.pv-mainSliderNav__itemImg_plenkiTon').mouseenter(function () {
        if ($(".pv-car").is(":hidden")) return;
        changeCarBg('tonirovka', 6);
    });

    // $('.pv-mainSliderNav__itemImg_plenkiTon').mouseleave(function () {
    //     clearTimeout(carTimeout);
    // });

    $('.pv-mainSliderNav__itemImg_rezina').mouseenter(function () {
        if ($(".pv-car").is(":hidden")) return;
        changeCarBg('rezina', 8);
    });

    $('.pv-mainSliderNav__itemImg_plenkiAntigrav').mouseenter(function () {
        if ($(".pv-car").is(":hidden")) return;
        if ($('.pv-carImage__conturWrap').hasClass('hide')) return;
        $('.pv-carImage__conturWrap').addClass('hide');
        $('.pv-carImage_rocks').addClass('animate');
    });

    $('.pv-mainSliderNav__itemImg_plenkiAntigrav').mouseleave(function () {
        if ($(".pv-car").is(":hidden")) return;
        $('.pv-carImage__conturWrap').removeClass('hide');
        $('.pv-carImage_rocks').removeClass('animate');
    });

    $('.pv-mainSliderNav__itemImg_alkantara').mouseenter(function () {
        if ($(".pv-car").is(":hidden")) return;
        $(".pv-carImage").addClass('hide');
        $(".pv-carImage_alkantara").addClass('show')
        setTimeout(function () {
            $(".pv-carImage_alkantara").addClass('slide');
        }, 400)

    });

    $('.pv-mainSliderNav__itemImg_alkantara').mouseleave(function () {
        if ($(".pv-car").is(":hidden")) return;
        $(".pv-carImage_alkantara").removeClass('slide').removeClass('show').removeClass('hide');
        $(".pv-carImage").removeClass('hide').removeClass('show');
    });

    $('.pv-mainSliderNav__itemImg_ekoKoja').mouseenter(function () {
        if ($(".pv-car").is(":hidden")) return;
        $(".pv-carImage").addClass('hide');
        $(".pv-carImage_ekoKoja").addClass('show');
        setTimeout(function () {
            $(".pv-carImage_ekoKoja").addClass('slide');
        }, 400)
    });

    $('.pv-mainSliderNav__itemImg_ekoKoja').mouseleave(function () {
        if ($(".pv-car").is(":hidden")) return;
        $(".pv-carImage_ekoKoja").removeClass('slide').removeClass('show').removeClass('hide');
        $(".pv-carImage").removeClass('hide').removeClass('show');
    });

    var pvProductsNav = document.querySelector('.pv-mainProducts__nav');
    var pvPostsNav = document.querySelector('.pv-mainPosts__nav');

    var ps = new PerfectScrollbar(pvProductsNav, {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 1,
        useBothWheelAxes: true,
        swipeEasing: true
    });

    var ps = new PerfectScrollbar(pvPostsNav, {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 1,
        useBothWheelAxes: true,
        swipeEasing: true
    });
});


function changeCarBg(path, num = 3) {
    if (!path) return;
    if (++carImage > num) carImage = 1;
    $(".pv-carImage").css('background-image', 'url(' + require("./images/lamba_send/" + path + "_" + carImage + ".png") + ')');

    // carTimeout = setTimeout(() => {
    //     changeCarBg(path, num);
    // }, 1700);
}

function getProductsSliderSettings() {
    return {
        slidesToShow: 3,
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

function getPostsSliderSettings() {
    return {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        centerMode: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
}
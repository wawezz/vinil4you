import "../../components/base/base";
import "../../components/brands/brands";
import "./styles.scss";

var carImage = 1;
var carTimeout;

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
        changeCarBg('kuzov_colors', 8);
    });

    // $('.pv-mainSliderNav__itemImg_plenki').mouseleave(function () {
    //     clearTimeout(carTimeout);
    // });

    $('.pv-mainSliderNav__itemImg_plenkiTon').mouseenter(function () {
        changeCarBg('tonirovka', 6);
    });

    // $('.pv-mainSliderNav__itemImg_plenkiTon').mouseleave(function () {
    //     clearTimeout(carTimeout);
    // });

    $('.pv-mainSliderNav__itemImg_rezina').mouseenter(function () {
        changeCarBg('rezina', 8);
    });

    $('.pv-mainSliderNav__itemImg_plenkiAntigrav').mouseenter(function () {
        if ($('.pv-carImage__conturWrap').hasClass('hode')) return;
        $('.pv-carImage__conturWrap').addClass('hide');
    });

    $('.pv-mainSliderNav__itemImg_plenkiAntigrav').mouseleave(function () {
        $('.pv-carImage__conturWrap').removeClass('hide');
    });

    $('.pv-mainSliderNav__itemImg_alkantara').mouseenter(function () {
        setTimeout(function () {
            $(".pv-carImage").addClass('hide');

            setTimeout(function () {
                $(".pv-carImage_alkantara").addClass('show');
            }, 50)
        }, 150)

    });

    $('.pv-mainSliderNav__itemImg_alkantara').mouseleave(function () {
        setTimeout(function () {
            $(".pv-carImage_alkantara").removeClass('show');
            $(".pv-carImage_alkantara").removeClass('hide');


            $(".pv-carImage").removeClass('hide');
            $(".pv-carImage").removeClass('show');
        }, 100)
    });

    $('.pv-mainSliderNav__itemImg_ekoKoja').mouseenter(function () {
        setTimeout(function () {
            $(".pv-carImage").addClass('hide');

            setTimeout(function () {
                $(".pv-carImage_ekoKoja").addClass('show');
            }, 50)
        }, 150)
    });

    $('.pv-mainSliderNav__itemImg_ekoKoja').mouseleave(function () {
        setTimeout(function () {
            $(".pv-carImage_ekoKoja").removeClass('show');
            $(".pv-carImage_ekoKoja").removeClass('hide');


            $(".pv-carImage").removeClass('hide');
            $(".pv-carImage").removeClass('show');
        }, 100)
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
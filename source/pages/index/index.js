import "../../components/base/base";
import "../../components/brands/brands";
import "./styles.scss";

$(function () {

    var carImage = 1;
    var carTimeout;

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

    preloadImages(["car_1.png", "car_2.png", "car_3.png", "car_4.png", "car_5.png", "car_6.png", "car_7.png", "car_8.png", "car_9.png"]);

    changeCarBg();

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).data("slider");
        $("." + target).slick('resize');
    });

});


function changeCarBg(num = 1) {
    $(".pv-carImage").css('background-image', 'url(' + require("./images/car_" + num + ".png") + ')');

    if (++num > 9) num = 1;

    setTimeout(() => {
        changeCarBg(num);
    }, 1700);
}

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function () {
            var index = list.indexOf(this);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = 'images/' + array[i];
    }
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
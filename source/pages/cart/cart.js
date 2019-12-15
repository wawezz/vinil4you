import "../../components/base/base";
import "./styles.scss";
import PerfectScrollbar from 'perfect-scrollbar';

$(function () {
    $(".pv-mainAnalog").slick(getProductsSliderSettings());
    $(".pv-mainAcsesuar").slick(getProductsSliderSettings());
    $(".pv-mainLike").slick(getProductsSliderSettings());

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).data("slider");
        $("." + target).slick('resize');
    });

    var pvProductsNav = document.querySelector('.pv-mainProducts__nav');

    var ps = new PerfectScrollbar(pvProductsNav, {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 1,
        useBothWheelAxes: true,
        swipeEasing: true
    });

});

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
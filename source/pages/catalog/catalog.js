import "../../components/base/base";
import "./styles.scss";
import PerfectScrollbar from 'perfect-scrollbar';

$(function () {

    var catsWrap = document.querySelector('.pv-catalogCats__wrap');

    var ps = new PerfectScrollbar(catsWrap, {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 1,
        useBothWheelAxes: true,
        swipeEasing: true
    });

    $(".pv-mainFullBanners").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: false,
        dots: true
    });

    $('.pv-catalogCat__more').click(function () {
        $(this).toggleClass('open');
        $(this).prev().toggleClass('show');
    });
});
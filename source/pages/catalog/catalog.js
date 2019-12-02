import "../../components/base/base";
import "./styles.scss";

$(function () {
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
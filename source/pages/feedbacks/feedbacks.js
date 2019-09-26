import "../../components/base/base";
import "../../components/feedbacks/feedbacks";
import "./styles.scss";

$(function () {

    $('.pv-custFeedback__feedbackSlider').each(function (key, item) {

        var sliderIdName = 'slider' + key;
        var sliderNavIdName = 'sliderNav' + key;

        this.id = sliderIdName;
        $('.pv-custFeedback__feedbackSlider-nav')[key].id = sliderNavIdName;

        var sliderId = '#' + sliderIdName;
        var sliderNavId = '#' + sliderNavIdName;

        $(sliderId).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: sliderNavId
        });

        $(sliderNavId).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: sliderId,
            dots: false,
            arrows: true,
            centerMode: false,
            focusOnSelect: true
        });

    });

    setTimeout(
        function () {
            $('.pv-custFeedback__feedbackSlider-itemAdd').height($('.pv-custFeedback__feedbackSlider-nav img').height());
        },
        200
    )

});
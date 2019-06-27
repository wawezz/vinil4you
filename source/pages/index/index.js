import '../../components/base/base';
import './styles.scss';
import IMask from 'imask';

var element = document.getElementById('phone-mask');
var element2 = document.getElementById('phone-mask2');
var maskOptions = {
    mask: '+{7} (000) 000-00-00'
};
var mask = IMask(element, maskOptions);
var mask = IMask(element2, maskOptions);

$(".pv-feedback__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        // {
        //     breakpoint: 1200,
        //     settings: {
        //         slidesToShow: 4
        //     }
        // },
        // {
        //     breakpoint: 980,
        //     settings: {
        //         slidesToShow: 3,
        //         dots: false,
        //         prevArrow: false,
        //         nextArrow: false
        //     }
        // },
        // {
        //     breakpoint: 740,
        //     settings: {
        //         slidesToShow: 2,
        //         dots: false,
        //         prevArrow: false,
        //         nextArrow: false
        //     }
        // },
        // {
        //     breakpoint: 500,
        //     settings: {
        //         slidesToShow: 1,
        //         dots: false,
        //         prevArrow: false,
        //         nextArrow: false
        //     }
        // }
    ]
});
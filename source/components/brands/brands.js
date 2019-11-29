import "./styles.scss";

$(function () {

  $(".pv-ourBrands__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        }
      },
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

});
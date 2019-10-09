import "../../components/base/base";
import "../../components/filiales/filiales";
import "../../components/feedbacks/feedbacks";
import "./styles.scss";
import PerfectScrollbar from 'perfect-scrollbar';

(function (e) {
    e.fn.circle = function (t) {
        var n = e.extend({
            speed: "5000"
        }, t);
        return this.each(function () {
            function t() {
                var e = i.find("li.pv-circleRotate__block.active").index();
                c.removeClass("active"), c.eq(e).addClass("active")
            }

            function o() {
                var n;
                i.addClass("disable-hover"), i.stop(!0, !0).animate({
                    rotatedeg: p.deg += p.step
                }, {
                    duration: 400,
                    step: function (t) {
                        t >= 360 ? t -= 360 : t <= -360 && (t += 360), e(this).css("transform", "rotate(" + t + "deg)"), e(this).css("-webkit-transform", "rotate(" + t + "deg)")
                    },
                    complete: function () {
                        p.active = i.find("li.active").removeClass("active"), "right" == p.direction && p.step == d && (p.active.prev() && p.active.prev().length ? (n = p.active.prev().index(), p.active.prev().addClass("active")) : (p.active.siblings(":last-child").addClass("active"), n = 9)), "left" == p.direction && p.step == u && (p.active.next() && p.active.next().length ? (n = p.active.next().index(), p.active.next().addClass("active")) : (p.active.siblings(":first-child").addClass("active"), n = 0)), i.is(":animated"), i.removeClass("disable-hover"), t()
                    }
                }, "ease")
            }

            function r() {
                i.addClass("disable-hover"), i.stop(!0, !0).animate({
                    rotatedeg: p.deg += p.step
                }, {
                    duration: 400,
                    step: function (t) {
                        t >= 360 ? t -= 360 : t <= -360 && (t += 360), e(this).css("transform", "rotate(" + t + "deg)"), e(this).css("-webkit-transform", "rotate(" + t + "deg)")
                    },
                    complete: function () {
                        p.active = i.find("li.active"), i.is(":animated"), i.removeClass("disable-hover")
                    }
                }, "ease")
            }
            var i = e(this),
                s = i.find("li").length,
                a = i.find(" > li .pv-circleRotate__icon"),
                l = "count" + s,
                u = 0,
                c = i.next().find(".pv-animate"),
                p = {
                    duration: n.speed,
                    deg: 0,
                    step: u,
                    active: i.find("li.active"),
                    direction: "left"
                };
            switch (s) {
                case 10:
                    u = -36;
                    break;
                case 9:
                    u = -40;
                    break;
                case 8:
                    u = -45;
                    break;
                case 7:
                    u = -51.5;
                    break;
                case 6:
                    u = -60;
                    break;
                case 5:
                    u = -72;
                    break;
                case 4:
                    u = -90;
                    break;
                case 3:
                    u = -120;
                    break;
                case 2:
                    u = -180;
                    break;
                case 1:
                    u = -360
            }
            i.addClass(l);
            var d = u - 2 * u;
            i.find("> li").first().addClass("active"), i.find("> li").first().find("a").attr("href"), c.eq(0).addClass("active"), e(a).on("click", function () {
                var n = e(this).parent().index() - i.find("li.active").index();
                i.children("li").removeClass("active"), e(this).parent().addClass("active"), p.step = -n * d, n * d >= 288 && (p.step = -n * d + 360), n * d <= -288 && (p.step = -n * d - 360), r(), p.step = u, p.direction = "left", t()
            });
            var f = i.parent().find("div.pv-rotateCircle__next"),
                h = i.parent().find("div.pv-rotateCircle__prev");
            f.on("click", function () {
                i.is(":animated") || (p.direction = "left", p.step = u, o())
            }), h.on("click", function () {
                i.is(":animated") || (p.direction = "right", p.step = d, o())
            })
        })
    }
}(jQuery));


$(function () {

    $('.pv-animateImg__in').each(function () {
        var url = $(this).attr('data-image');
        if (url) {
            $(this).css('background-image', 'url(' + url + ')');
        }
    });

    $('.pv-services').each(function () {
        var url = $(this).attr('data-image');
        if (url) {
            $(this).css('background-image', 'url(' + url + ')');
        }
    });

    // Service Auto height circle 
    function autoHeightCircle() {
        setTimeout(function () {
            var circle = $('.pv-circleRotate'),
                circleInner = $('.pv-animateWrapper'),
                circleH = circle.width(),
                circleInnerH = circleInner.width();
            circle.height(circleH);
            circleInner.height(circleInnerH);
        }, 200);
    }

    function fitAboutText() {
        var aboutImgH = $('.pv-aboutCompany__image img').height() || 445;
        $('.pv-aboutCompany__text').height(aboutImgH);
    }

    $("#pv-circleRotate").circle();
    autoHeightCircle();
    fitAboutText();
    $(window).resize(function () {
        autoHeightCircle();
        fitAboutText();
    });


    var aboutCompanyTeaxt = document.querySelector('#pv-aboutCompanyTeaxt');

    var ps = new PerfectScrollbar(aboutCompanyTeaxt, {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 1
    });

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

    $(window).scroll(function () {
        var x = $(this).scrollTop();
        $('.pv-servicesBg__item:eq(0)').css('background-position', '0 ' + parseInt(x / 7) + 'px ');
        $('.pv-servicesBg__item:eq(1)').css('background-position', parseInt(x / 10) + 'px 0');
        $('.pv-servicesBg__item:eq(2)').css('background-position', parseInt(x / 20) + 'px ' + parseInt(x / 20) + 'px ');
    });
});
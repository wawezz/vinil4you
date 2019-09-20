import "./styles.scss";
import PerfectScrollbar from 'perfect-scrollbar';

$(function () {

  const addressesList = document.querySelector('#pv-addressesList');

  const ps = new PerfectScrollbar(addressesList, {
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 1
  });

  $(document).on("click", ".pv-addresses__listView", function () {
    var aboutWrap = $(".pv-addressesWrap");

    if (aboutWrap.hasClass("map")) aboutWrap.removeClass("map");
    if ($(".pv-addresses__mapView").hasClass("active")) $(".pv-addresses__mapView").removeClass("active");

    aboutWrap.toggleClass("list");
    $(this).toggleClass("active");

  });

  $(document).on("click", ".pv-addresses__mapView", function () {
    var aboutWrap = $(".pv-addressesWrap");

    if (aboutWrap.hasClass("list")) aboutWrap.removeClass("list");
    if ($(".pv-addresses__listView").hasClass("active")) $(".pv-addresses__listView").removeClass("active");

    aboutWrap.toggleClass("map");
    $(this).toggleClass("active");
  });
});
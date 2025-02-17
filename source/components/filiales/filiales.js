import "./styles.scss";

$(function () {

  $('.pv-filiales__Legal').on('click', '.pv-filiales__Legal_head', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next('.pv-filiales__Legal_body').slideUp();
    } else {
      $(this).addClass('open');
      $(this).next('.pv-filiales__Legal_body').slideDown();
    }
  });

  $(document).on("click", "body", function (evt) {

    if (evt.target.parentNode.id == 'map_wrap' && evt.target.tagName == "path" || evt.target.id == "svg_map_popup") return;

    if ($("#svg_map_popup").hasClass('active')) $("#svg_map_popup").removeClass('active');
    $(".pv-filiales__mapSvgWrap .activePath").removeClass('activePath');
  })

  $(".pv-filiales__mapSvgWrap").on("click", "path", function () {
    $("#svg_map_popup").removeClass('active');
    $(".pv-filiales__mapSvgWrap .activePath").removeClass('activePath');
    $(this).addClass('activePath');

    var index = $(this).index();
    $('#svg_map_popup .pv-filiales__mapPopap_title').text(cities[index].title || cities[index].name);
    $('#svg_map_popup .pv-filiales__mapPopap_address span').text(cities[index].address || '---');
    $('#svg_map_popup .pv-filiales__mapPopap_workingDays').text(cities[index].working_days || '---');
    $('#svg_map_popup .pv-filiales__mapPopap_daysOff').text(cities[index].days_off || '---');

    if (cities[index].yandex_link) {
      $('#svg_map_popup .pv-filiales__mapPopap_yandexLink').attr('href', cities[index].yandex_link).show()
    } else {
      $('#svg_map_popup .pv-filiales__mapPopap_yandexLink').attr('href', '#').hide();
    }

    if (cities[index].visit_link) {
      $('#svg_map_popup .pv-filiales__mapPopap_orderVisit').attr('href', cities[index].visit_link).show()
    } else {
      $('#svg_map_popup .pv-filiales__mapPopap_orderVisit').attr('href', '#').hide();
    }

    var parentPos = $(".pv-filiales__mapSvgWrap")[0].getBoundingClientRect(),
      childPos = $(".pv-filiales__mapSvgWrap path")[index].getBoundingClientRect(),
      relativePos = {};

    relativePos.top = childPos.top - parentPos.top,
      relativePos.left = childPos.left - parentPos.left;

    var top = relativePos.top + childPos.height / 2 + $("#svg_map_popup").height() / 2 - 10;
    var left = relativePos.left + childPos.height / 2 - $("#svg_map_popup").width() / 2;;
    if (left < 0 && $(window).width() < 1024) left = 0;
    if (left + $("#svg_map_popup").outerWidth() + 30 > $(".pv-filiales__mapSvgWrap").width()) left = $(".pv-filiales__mapSvgWrap").width() - $("#svg_map_popup").outerWidth();

    $("#svg_map_popup").addClass('active').css({
      top: top,
      left: left
    })
  });
});


var cities = [{
  name: 'Республика Адыгея',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Алтай',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Амурская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Архангельская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Астраханская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Башкортостан',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Белгород',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Брянск',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Бурятия',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Чеченская республика',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Челябинск',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Чукотский автономный округ',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Чувашская республика',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Крым',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Дагестан',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Ханты-Мансийский автономный округ',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Ингушетия',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Иркутская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Ивановская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Еврейская автономная область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Кабардино-Балкарская Республика',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Калининград',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Калмыкия',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Калуга',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Камчатский край',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Карачаево-Черкесская Республика',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Карелия',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Кемеровская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Хабаровский край',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Хакасия',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Кировская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Коми',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Костромская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Краснодар',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Красноярский край',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Курганская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Курская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Санкт-Петербург',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Липецкая область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Магаданская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Марий Эл',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Мордовия',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Москва',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Мурманская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Ненецкий автономный округ',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Н.Новгород',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Северная Осетия',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Новгородская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Новосибирск',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Омская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Орловская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Оренбургская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Пензенская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Пермский край',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Приморский край',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Псковская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Ростов-на-Дону',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Рязань',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Саха',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной'
}, {
  name: 'Сахалинская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Самара',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Саратовская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Смоленская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Ставропольский край',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Екатеринбург',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Тамбовская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Татарстан',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Томская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Забайкальский край',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Тульская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Тыва',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Тверская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Тюменская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Республика Удмуртия',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Ульяновская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Владимирская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Волгоград',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Вологодская область',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Воронеж',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Ямало-Ненецкий автономный округ',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}, {
  name: 'Ярославль',
  title: 'СВАО, м. Владыкино, ЛЦ «Аврора»',
  address: 'г. Москва, Алтуфьевское шоссе 37 стр. 10, эт. 3, офис № 3',
  yandex_link: '#',
  working_days: 'пн – пт: с 10:00 до 19:00',
  days_off: 'сб – вс: выходной',
  visit_link: '#'
}]
import "./styles.scss";

$(function () {

  $(".pv-AQ").on("click", ".pv-AQ__rowHead", function () {
    var activeRow = $('.pv-AQ .activeRow');
    var row = $(this).parents('.pv-AQ__row');
    var breake = row.hasClass('activeRow') ? true : false;

    if (activeRow) {
      activeRow.children('.pv-AQ__rowBody').slideUp(300);
      activeRow.find('.pv-AQ__rowMore').removeClass('open');
      activeRow.find('.pv-AQ__rowMore span').text('Подробнее');
      activeRow.removeClass('activeRow');
    }

    if (breake) return;

    row.addClass('activeRow');
    row.find('.pv-AQ__rowMore').addClass('open');
    row.find('.pv-AQ__rowMore span').text('Закрыть').addClass('open');
    row.children('.pv-AQ__rowBody').slideDown(300);

  })

  $(document).on("click", ".pv-AQ__more", function () {
    var html = '<div class="fadingInRow pv-AQ__row">' +
      '<div class="pv-AQ__rowHead">' +
      '<div class="pv-AQ__rowTitle">С какими транспортными компаниями мы работаем?</div>' +
      '<div class="pv-AQ__rowMore"><span>Подробнее</span></div>' +
      '</div>' +
      '<div class="pv-AQ__rowBody">Возврат целых рулонов производится безоговорочно в течении 14 дней с момента покупки товара. Постановление Правительства РФ от 20.10.1998 № 1222.<br><br>Товары, отпускаемые метражом (винил, тонировочная пленка, экокожа, и т.п.) возврату или обмену на аналогичный товар другого размера, фирмы, габарита, фасона, расцветки или комплектации не подлежат. Постановление Правительства РФ от 19.01.1998 №55 (ред. От 23.12.2016).</div>' +
      '</div>';

    $('.pv-AQ__rows').append(html);
    $('.fadingInRow').fadeIn(300, function () {
      $(this).removeClass('fadingInRow');
    });
  });
});
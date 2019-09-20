import "../../components/base/base";
import "../../components/addresses/addresses";
import "../../components/filiales/filiales";
import "../../components/answers/answers";
import "./styles.scss";

$(function () {

    $(".pv-deliveryTarif__tableRow").on("click", ".pv-deliveryTarif__tableColumn_titleArrow", function () {
        var activeRow = $('.pv-deliveryTarif__table .activeRow');
        var row = $(this).parents('.pv-deliveryTarif__tableRow');
        var breake = row.hasClass('activeRow') ? true : false;

        if (activeRow) {
            activeRow.children('.pv-deliveryTarif__tableColumn_slide').slideUp(300);
            activeRow.find('.pv-deliveryTarif__tableColumn_titleArrow i').removeClass('fa-angle-down').addClass('fa-angle-right');
            activeRow.removeClass('activeRow');
        }

        if (breake) return;

        row.addClass('activeRow');
        row.find('.pv-deliveryTarif__tableColumn_titleArrow i').removeClass('fa-angle-right').addClass('fa-angle-down');
        row.children('.pv-deliveryTarif__tableColumn_slide').slideDown({
            start: function () {
                $(this).css({
                    display: "flex"
                })
            }
        });

    })
});
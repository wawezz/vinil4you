import "../../components/base/base";
import "./styles.scss";
import IMask from "imask";

var element = document.getElementById("phone-mask");
var maskOptions = {
    mask: "+{7} (000) 000-00-00"
};
var mask = IMask(element, maskOptions);

$(function () {

});
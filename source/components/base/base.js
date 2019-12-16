import "bootstrap";
import "./styles.scss";
import "normalize.css";
import $ from "jquery";
import "slick-carousel";
import PerfectScrollbar from 'perfect-scrollbar';

$(function () {
  $(document).on("click", ".pv-header__burgerBtn", function () {
    $(this).toggleClass("pv-header__burgerBtn_open");
    $(".pv-mobileMenu").toggleClass("show");
    $(".pv-contentWrap").toggleClass("open");
  });

  $(document).on("click", ".pv-header__cityInfo", function (e) {
    e.preventDefault();
    $(this).toggleClass("pv-header__cityInfo_open");
  });

  $(document).on("click", ".pv-nav__searchBtn", function () {
    var input = $(".pv-nav__search .pv-nav__searchInput");

    if (input.width() === 0) {
      input.addClass("open");
    } else {
      input.removeClass("open");
    }
  });

  $(document).on("click", ".dropdownBtn", function () {
    var sub = $(this).next();

    if (!sub.is(":visible")) {
      sub.slideDown(300);
    } else {
      sub.slideUp(300);
    }
  });

  $(document).on("click", ".pv-mobileSearchBtn", function () {
    var sub = $(".pv-mobileSearch");

    if (!sub.is(":visible")) {
      sub
        .css("display", "flex")
        .hide()
        .fadeIn(300);
    } else {
      sub.fadeOut(300);
    }
  });

  var pvBreadcrumb = document.querySelector('.pv-breadcrumb');

  var ps = new PerfectScrollbar(pvBreadcrumb, {
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 1,
    useBothWheelAxes: true,
    swipeEasing: true
  });

  customSelects();

});

function customSelects() {
  var x, i, j, selElmnt, a, b, c;
  /*look for any elements with the class "pv-customSelect":*/
  x = document.getElementsByClassName("pv-customSelect");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
}
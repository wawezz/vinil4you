import 'bootstrap';
import './styles.scss';
import 'normalize.css';
import $ from 'jquery';
import 'slick-carousel';

$(function () {

  $(document).on('click', '.pv-header__burgerBtn', function () {
    $(this).toggleClass('pv-header__burgerBtn_open');
  })

  $(document).on('click', '.pv-header__cityInfo', function () {
    $(this).toggleClass('pv-header__cityInfo_open');
  })

});
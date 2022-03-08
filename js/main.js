$(function () {
  'use strict'

  // toggle share container
  $('.help, #help-toggel').on('click', function () {
    $('.help').toggleClass('d-none d-block')
  });

  // toggle share container
  $('.share-btn').on('click', function () {
    $('.share').toggleClass('d-flex d-none')
  });

  // toggle view more
  $('.view-more').on('click', function () {
    $(this).parent('div').siblings('.colors').toggleClass('show')
    $(this).children('i').toggleClass('fa-angle-down fa-angle-up')
  });

  // light and night toggel
  $('#light-night-toggel').on('click', function () {
    $('svg .light-image').toggle();
  });

  // color change
  var sidecolor = ''
  var sideel = ''

  $('.side1').on('click', function () {
    $('.side1').css({ "stroke-width": "3", "stroke": "#00a657", "fill": "rgba(0, 166, 87, 0)" });

    sideel = $('.side1')
  });

  $('.side2').on('click', function () {
    $('.side2').css({ "stroke-width": "3", "stroke": "#00a657", "fill": "rgba(0, 166, 87, 0)" });
    sideel = $('.side2')
  });

  $('.side3').on('click', function () {
    $('.side3').css({ "stroke-width": "3", "stroke": "#00a657", "fill": "rgba(0, 166, 87, 0)" });
    sideel = $('.side3')
  });

  $('.side4').on('click', function () {
    $('.side4').css({ "stroke-width": "3", "stroke": "#00a657", "fill": "rgba(0, 166, 87, 0)" });
    sideel = $('.side4')
  });

  $('.color').on('click', function () {
    sidecolor = $(this).css('background-color')
    sideel.css({ "stroke-width": "2", "stroke": sidecolor, "fill": sidecolor });
    sideel.children('.InformationPanel__main-color').css({
      "background-image": "none",
      "background-color": sidecolor,
    })
    sideel.css({
      "width": "200px"
    })
  });

  // color change

})
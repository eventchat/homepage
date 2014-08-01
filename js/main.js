$(function () {

  $('#header').height($(window).height());

  setTimeout(function () {
    $('#hand').addClass('in');
  }, 1000);

  setTimeout(function () {
    $('#text').addClass('in');
  }, 1000);

  $('#columns').waypoint(function () {
    $('.column').eq(1).addClass('in');
    setTimeout(function () {
      $('.column').eq(0).addClass('in');
      $('.column').eq(2).addClass('in');
    }, 500);
  }, {
    offset: 500
  });
});

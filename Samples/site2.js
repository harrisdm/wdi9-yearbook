
$(document).ready(function(){
  $('.student-list').slick({
    vertical: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true
  });


  $('.student-list').on('mouseover', function() {
    $('.student-list').slick('slickPause');
  });

  $('.student-list').on('mouseout', function() {
    $('.student-list').slick('slickPlay');
  });


});
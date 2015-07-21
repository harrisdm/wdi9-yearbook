

$(document).ready(function() {

  var $modal = $('.modal').modal({
      show: false
  });

  $('.about').on('click', function() {
      $modal.modal('show');
  });



  // Cycle plugin
  $('.slides').cycle({
      fx:     'none',
      speed:   300,
      timeout: 5
  }).cycle("pause");

  // Pause & play on hover
  $('.slideshow-block').hover(function(){
    $(this).find('.slides').addClass('active').cycle('resume');
  }, function(){
    $(this).find('.slides').removeClass('active').cycle('pause');
  });

});


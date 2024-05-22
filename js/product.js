$(document).ready(function() {
// MADE BY EREN ONAK ANIL TOKLU EREN YARDIMCI  SEMİH ARTAN
  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

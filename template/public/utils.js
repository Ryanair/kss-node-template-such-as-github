(function($) {
  $('.styleguide-collapse__header').on('click', function(e) {
    $(this).parent().find('.styleguide-collapse__content').toggle();
  })
})(jQuery);

(function(c) {
  var a = new c('.copy');
})(Clipboard);

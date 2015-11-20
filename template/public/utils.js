(function($) {
  $('.styleguide-collapse__header').on('click', function(e) {
    $(this).parent().find('.styleguide-collapse__content').toggle();
  })
})(jQuery);

//Адаптивное меню JQuery

$(document).ready(function () {
  $('.mainmenu .menubutton').click(function () {
    $('.mainmenu ul').slideToggle(500);
  });
  $(window).resize(function () {
		if ($(window).width() > 500) {
			$('.mainmenu ul').removeAttr('style');
		}
	});
})(jQuery);
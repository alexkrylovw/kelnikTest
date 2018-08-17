//Валидация формы email через JQuery Validate

$(function () {
	$('#emForm').validate({
		rules: {
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			email: {
				required: 'Поле Email не должно быть пустым!',
				email: 'Проверьте корректность вашего Email!'
			}
		},
		errorLabelContainer: $('#errorDiv')
	});
});
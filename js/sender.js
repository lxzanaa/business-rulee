$(document).ready(function () {
    //Обработка формы
    $('.ajax_form').submit(function (event) {
        event.preventDefault();
        var $form = $(this),
            formAction = $form.attr('action'),
            formData = $form.serialize();

        //Отпраляем вопрос пользователя
        $.ajax({
            url: formAction, //Адрес страницы или скрипта
            type: 'POST',  // HTTP метод
            data: formData,  // Данные для отправки (в данном случае в видео объекта)
            success: function (data, status, xhr) { //callback на случай успешного выполнения запроса
                $('#message').html(data); //Показываем результат на странице
            }
        });
    });
});

$(document).ready(function () {
    //Обработка формы
    $('.add_update_img').submit(function (event) {
        event.preventDefault();
        var $form = $(this),
            formAction = $form.attr('action'),
            formData = $form.serialize();

        //Отпраляем вопрос пользователя
        $.ajax({
            url: formAction, //Адрес страницы или скрипта
            type: 'POST',  // HTTP метод
            data: formData,  // Данные для отправки (в данном случае в видео объекта)
            success: function (data, status, xhr) { //callback на случай успешного выполнения запроса
                $('#message').html(data); //Показываем результат на странице
            }
        });
    });
});
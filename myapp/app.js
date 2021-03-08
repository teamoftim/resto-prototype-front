const express = require('express');
const app = express();
const rp = require('request-promise');
const port = 3002;


// HTML странички и URL
app.get('/', function (
    request,
    response
) {
    response.sendFile(__dirname + '/index.html')
})
app.get('/card-molodost', function (
    request,
    response
) {
    response.sendFile(__dirname + '/card-molodost.html')
})


// Подрубаем статику
app.use('/public', express.static('public'));

console.log("Странички запустились");

//ЗАпуск сервера и вывод ссылки в консоли
app.listen(port, () => {
    console.log(`Сервер готов. Переходи по ссылке: http://localhost:${port}`)
})



// Отправляем запрос
const URL = 'https://restaurantmvp.herokuapp.com/data';

function requestHandler() {
    console.log("старт функции хендлер");
    // Получаем форму
    const form = document.forms.orderForm;

    //Получаем элементы формы
    const elem_name = form.elements.name;
    const elem_phone = form.elements.phone;
    const elem_hours_count = form.elements.hours_count;
    const elem_person_count = form.elements.person_count;
    const elem_comment_str = form.elements.comment_str;

    const elem_datetime = form.elements.datetime;

    // Формируем из элементов объект с значением элементов
    const dict = {
        phone: elem_phone.value,
        name: elem_name.value,
        restaurant_id: 1,
        datetime: "2021-03-02 14:00:00",
        hours_count: elem_hours_count.value,
        person_count: elem_person_count.value,
        comment_str: elem_comment_str.value,
    };

    alert(dict.name);

    const options = {
        method: 'POST',
        url: URL,
        body: dict,
        json: true
    }
    rp(options)
        .then(function (response) {
            console.log(response)
        })
        .catch(err => console.log(err))

}
const express = require('express');
const bodyParser = require("body-parser");
const rp = require('request-promise');

const app = express();
const port = 3002;
const URL = 'https://restaurantmvp.herokuapp.com/data';
const urlencodedParser = bodyParser.urlencoded({extended: false});


function requestHandler(data) {
    console.log("старт функции хендлер");

    const dict = {
        phone: data.phone,
        name: data.name,
        restaurant_id: 1,
        datetime: "2021-03-02 14:00:00",
        hours_count: data.hours_count,
        person_count: data.person_count,
        comment_str: data.comment_str,
    };

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

app.post(
    "/card-molodost",
    urlencodedParser,
    function (
        request,
        response
    ) {
        if(!request.body) return response.sendStatus(400);
        console.log(request.body);
        requestHandler(request.body);
        response.sendFile(__dirname + "/success.html")
    });

// Подрубаем статику
app.use('/public', express.static('public'));


//ЗАпуск сервера и вывод ссылки в консоли
app.listen(port, () => {
    console.log(`Сервер готов. Переходи по ссылке: http://localhost:${port}`)
})





// Отправляем запрос



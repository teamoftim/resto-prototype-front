const express = require('express')
const rp = require('request-promise')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3002

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

console.log("wewew");



function requestHandler() {
    console.log("sdsds");
    var dict = {
        "phone": 79266266252,
        "name": "rtyu",
        "restaurant_id": 1,
        "datetime": "2021-03-02 14:00:00",
        "hours_count": 3,
        "person_count": 4,
        "comment_str": "Принести воду к приходу"
    };

    const options = {
        method: 'POST',
        uri: 'https://restaurantmvp.herokuapp.com/data',
        body: dict,
        json: true
    }
    rp(options)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (err) {
            console.log(err)
        })


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


// Подрубаем статику
app.use('/public', express.static('public'));



//ЗАпуск сервера и вывод ссылки в консоли
app.listen(port, () => {
    console.log(`Сервер готов. Переходи по ссылке: http://localhost:${port}`)
})
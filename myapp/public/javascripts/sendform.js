const rp = require("request-promise");











// Отправка данных из формы в ядро
// // Парсер для данных
// const urlencodedParser = bodyParser.urlencoded({
//     extended: false,
// })

// app.get('register', urlencodedParser, function (
//     request,
//     response
// ) {
//     response.sendFile('/register.html')
// })

//     app.post('https://restaurantmvp.herokuapp.com/data', urlencodedParser, function (
//     request,
//     response
// ) {
//         console.log(request.body);
//     if (!request.body) return response.sendStatus(400)
//         var dict = {
//             "phone": request.body.phone,
//             "name": request.body.name,
//             "restaurant_id": "1",
//             "datetime": "2021-03-02 14:00:00",
//             "hours_count": request.body.hours_count,
//             "person_count": request.body.person_count,
//             "comment_str": request.body.comment_str
//         }
//     console.log(dict)
//     response.send(dict)
// })
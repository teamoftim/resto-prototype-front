// function requestHandler() {
//     console.log("asdasd");
//     const request = require('request-promise');
//     console.log("asdasd");
//     let form = document.forms.form;
//
//
//     var dict = {
//         "phone": form.elements.phone,
//         "name": form.elements.name,
//         "restaurant_id": 1,
//         "datetime": "2021-03-02 14:00:00",
//         "hours_count": form.elements.hours_count,
//         "person_count": form.elements.person_count,
//         "comment_str": "Принести воду к приходу"};
//
//     const options = {
//         method: 'POST',
//         uri: 'https://restaurantmvp.herokuapp.com/data',
//         body: dict,
//         json: true
//     }
//     request(options)
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (err) {
//             console.log(err);
//         })
//
// }
//
//
//
//


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



function requestHandler() {
    console.log("sdsds");
    const request = require('request-promise');
    console.log("хуй");
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
    request(options)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (err) {
            console.log(err)
        })


};
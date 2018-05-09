// get express
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// connect to mongodb
var db = mongoose.connect('mongodb://localhost:27017/my_test');

// data schema
// var Book = require('./models/BookModel');
// var bookRouter = require('./Routes/bookRoutes/');
// var bookrouts = bookRouter(Book);

// initialize express
var app = express();
app.use(express.json());
// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));

// set port
var port = process.env.PORT || 4000;

app.get('/test', function (req, res) {
    var output = "Hello world";
    res.send(output);
});

app.post('/test', function (req, res) {
    console.log(req.body);
    res.send("ok")
});

// start listen to porn/live
app.listen(port, function(){
    console.log('Gulp is running on PORT: ' + port);
});

/*
* dekhacchi kono data pacche na
* postman e kono data pachchena
* browser e pachche?
* ami sure na browser er bapare
* */
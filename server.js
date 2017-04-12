var express = require('express');

var app = express();

var cors = require('cors');

var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/users');

var User = require('./model/userModel');

var userRouter = require('./routes/userRoute')(User, express);

app.use(cors());

app.use('/user', userRouter);

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', function() {
    console.log('listening at', process.env.PORT || 3000, process.env.IP || '0.0.0.0');
});
var express = require('express');

var app = express();

var path = require('path');

var cors = require('cors');

var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://sachin.ghumnar:sachin@721@ds145302.mlab.com:45302/sachin721');

var User = require('./model/userModel');

var userRouter = require('./routes/userRoute')(User, express);

app.use(cors());

app.use(express.static(path.join(__dirname, 'client')));

app.use('/user', userRouter);

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', function() {
    console.log('listening at', process.env.PORT || 3000, process.env.IP || '0.0.0.0');
});

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userModel = new Schema({
    username: {
        type: String,
        default: ""
    },
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        default: ""
    },
    userStatus: {
        type: String,
        default: true
    }
});

module.exports = mongoose.model('User', userModel);
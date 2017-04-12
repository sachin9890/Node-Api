var userController = {};

userController.users = function(User, req, res) {
    User.find(function(err, user) {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
};

userController.login = function(User, req, res) {
    var query = {};
    query.username = req.body.username;
    query.password = req.body.password;

    User.find(query, function(err, user) {
        if (err) {
            res.json(err);
        } else {
            res.json({
                'auth-token': user[0]._id
            });
        }
    });
};

userController.signup = function(User, req, res) {
    console.log(req.body);
    var user = new User(req.body);
    user.save();
    res.send(user);
};

userController.editProfile = function(User, req, res) {
    User.findOneAndUpdate({
        username: req.body.username
    }, {
        $set: req.body
    }, {
        new: true
    }, function(err, user) {
        if (err) {
            console.log("Something wrong when updating data!");
        }
        res.json(user);
    });
};

userController.changePassword = function(User, req, res) {
    User.findOneAndUpdate({
        username: req.body.username
    }, {
        $set: {
            password: req.body.password
        }
    }, {
        new: true
    }, function(err, user) {
        if (err) {
            console.log("Something wrong when updating data!");
        }
        res.json(user);
    });
};

userController.forgotPassword = function(User, req, res) {

};

userController.remove = function(User, req, res) {
    var query = {};
    query._id = req.body.id;
    User.findByIdAndRemove(query, function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send("user deleted");
        }
    });
};


module.exports = userController;
module.exports = function(User, express) {
    var userRouter = express();
    
    var bodyParser = require('body-parser');
    
    var userController = require("../controllers/userController");
    
    // parse application/x-www-form-urlencoded 
    userRouter.use(bodyParser.urlencoded({
        extended: false
    }));

    // parse application/json 
    userRouter.use(bodyParser.json());

    userRouter.get('/', function(req, res) {
        userController.users(User, req, res);
    });

    userRouter.post('/login', function(req, res) {
        userController.login(User, req, res);
    });

    userRouter.post('/signup', function(req, res) {
        userController.signup(User, req, res);
    });

    userRouter.put('/editProfile', function(req, res) {
        userController.editProfile(User, req, res);
    });

    userRouter.put('/changePassword', function(req, res) {
        userController.changePassword(User, req, res);
    });

    userRouter.put('/forgotPassword', function(req, res) {
        userController.forgotPassword(User, req, res);
    });

    userRouter.delete('/deleteUser', function(req, res) {
        userController.remove(User, req, res);
    });

    return userRouter;
};
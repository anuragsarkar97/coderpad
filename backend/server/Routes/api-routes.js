let router = require('express').Router();
const cacher= require('../Model/CacheMiddleware');
const cors = require('cors');
//ALL Controller Imports
const userController = require('../Controller/UserController.js');
const loginController = require('../Controller/LoginController');


router.get('/get', cors(), function (req, res) {
    console.log(req.body);
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Coderpad'

    });
});
//User Routes
router.get('/global',cacher.set,cacher.get,userController.index);
router.post('/new',userController.new);
router.get('/alllogin',cacher.get,loginController.logindata);
router.post('/login',cacher.set,cacher.get,loginController.newlogin);



module.exports = router;

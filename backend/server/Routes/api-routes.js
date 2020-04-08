let router = require('express').Router();
const cacher= require('../Model/CacheMiddleware');
const cors = require('cors');
//ALL Controller Imports
const userController = require('../Controller/UserController.js');
const loginController = require('../Controller/LoginController');
const questionsControlller = require('../Controller/QuestionsController');

router.get('/get', cors(), function (req, res) {
    console.log(req.body);
    res.json({
        status: '200 OK',
        message: 'Welcome to Coderpad'

    });
});
//API Testing Routes
router.get('/global',cacher.set,cacher.get,userController.index);
router.post('/new',cacher.get,userController.new);

//Login API Routes
router.post('/login',cacher.set,cacher.get,loginController.newlogin);
router.get('/alllogin'  ,cacher.get,loginController.logindata);

//Questions API Routes
router.get('/questions',cacher.get,questionsControlller.quesdata);
router.post('/new/question',cacher.get,questionsControlller.postques);
router.get('/select/:question_difficulty',cacher.get,questionsControlller.tag);
router.put('/edit/:document_id',cacher.get,questionsControlller.quesupdate);
module.exports = router;

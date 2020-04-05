let router = require('express').Router();

const cors = require('cors');

const userController = require('../Controller/UserController.js');
router.get('/get', cors(), function (req, res) {
    console.log(req.body);
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Coderpad'

    });
});
//User Routes
router.get('/global',userController.index);
router.post('/new',userController.new);



module.exports = router;

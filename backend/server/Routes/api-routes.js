let router = require('express').Router();
const NodeCache = require( "node-cache" );
const cache = new NodeCache({ stdTTL: 5 * 60 });

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
//Caching Auth

router.get('/login');


module.exports = router;

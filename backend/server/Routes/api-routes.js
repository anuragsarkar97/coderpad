let router = require('express').Router();
const cors = require('cors');


router.get('/', cors(), function (req, res) {
    console.log(req.body);
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Coderpad'

    });
});

module.exports = router;

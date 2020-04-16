Login = require('../Model/LoginHandler');
const auth = require('../Model/CacheMiddleware');


exports.logins = function (req, res) {
    let access_token = req.headers['access_token'];
    let googleId = req.body.profile.googleId;
    Login.findOneAndUpdate({googleId: req.body.profile.googleId},
        {
            $set: {
                imageUrl: req.body.profile.imageUrl,
                email: req.body.profile.email,
                name: req.body.profile.name,
                givenName: req.body.profile.givenName,
                familyName: req.body.profile.familyName,
                loginDate: Date.now()
            }
        }, {new: true}, function (err, docdata) {
            if (err) {
                res.send(err)
            }
            res.json({
                data: docdata
            });
            auth.updateToken(access_token, googleId);
        });
};

Ratings = require('../Model/RatingHandler');
const auth = require('../Model/CacheMiddleware');
const HashMap = require('hashmap');
Login = require('../Model/LoginHandler');
/*
POST RATING
 */
exports.giveRating = function (req, res) {
    let google_ids = auth.validateToken(req.headers['access_token']);
    Ratings.findOneAndUpdate({google_id: google_ids}, {$set: {star: req.body.star}}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }

        console.log(doc);
        res.json({
            response: "200 Ok",
            data:doc
        });
    });
};

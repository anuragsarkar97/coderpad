User= require('./Model/User');

/*
get all user details
 */
exports.index= function (req,res) {
User.get(function (err,users) {
        if(err) throw err;
        console.log(err);
        res.json({
            status:"success",
            message:"All User Details ",
            data:users
        });
});
};

exports.new=function (req,res) {
    //create Object of User
    const user= new User();
    user.accessTokens =  req.body.accessTokens ? req.body.accessTokens : user.accessTokens;
    user.tokenId = req.body.tokenId ? req.body.tokenId : user.tokenId;
    user.profile = req.body.profile ? req.body.profile : user.profile;

   user.save(function (err) {
            if(err){
                res.json(err);
            }
            res.json({
                message : "New User Saved",
                data: user
            });
   });
};

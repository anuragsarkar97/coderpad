


User= require('./Model/User');
UserProfile=require('./Model/Profile');
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
/*
POST
 */
exports.new = function (req,res) {
    //create Object of User
    const user= new User();
    user.accessTokens =  req.body.accessTokens ? req.body.accessTokens : user.accessTokens;
    user.tokenId = req.body.tokenId ;
    const profile= new UserProfile();
    user.profile = req.body.profile ;

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

/*
findById
 */
exports.view=function(req,res){
    User.findById(req.params.accessTokens,function (err,user) {
            if(err) throw err;
            res.json({
                message:"User Data Loading..",
                data:user
            });
    });
};
/*
PUT/PATCH
 */
exports.update=function (res,req) {
    User.findById(req.params.accessTokens,function (err,user) {
        if(err) throw err;
        user.accessTokens =  req.body.accessTokens ? req.body.accessTokens : user.accessTokens;
        user.tokenId = req.body.tokenId ? req.body.tokenId : user.tokenId;
        user.profile = req.body.profile ? req.body.profile : user.profile;

        res.json({
           message:"User Info Updated",
        });
    });
};

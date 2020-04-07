Login = require('../Model/LoginHandler');

/*
Get to be removed only for Testing
 */
exports.logindata= function (req,res) {
Login.get(function (err,logins) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status:"success",
            message:"All Login Details ",
            data:logins
        });
});
};

/*
POST
 */
exports.newlogin = function (req,res) {
    debugger;
    const logins= new Login();
    logins.accessToken =  req.body.accessToken;
    logins.tokenId = req.body.tokenId ;
    logins.googleId = req.body.profile.googleId;
    logins.imageUrl=req.body.profile.imageUrl;
    logins.email=req.body.profile.email;
    logins.name=req.body.profile.name;
    logins.givenName= req.body.profile.givenName;
    logins.familyName=req.body.profile.familyName;
    logins.username=req.body.profile.email.substr(0,req.body.profile.email.length-2);
   logins.save(function (err) {
            if(err){
                res.json(err);
            }
            res.json({
                message : "Login Successfull",
                data: logins
            });
   });
};
/*
findbyID
 */
// exports.view=function(req,res){
//     User.findById(req.params.accessTokens,function (err,user) {
//             if(err) {
//                 res.send(err);
//             }
//             res.json({
//                 message:"User Data Loading..",
//                 data:user
//             });
//     });
// };

Login = require('../Model/LoginHandler');
const UsernameGenerator=require('username-generator');
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
        console.log("login success");
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
    logins.username=UsernameGenerator.generateUsername();
    logins.profile.googleId = req.body.profile.googleId;
    logins.profile.imageUrl=req.body.profile.imageUrl;
    logins.profile.email=req.body.profile.email;
    logins.profile.name=req.body.profile.name;
    logins.profile.givenName= req.body.profile.givenName;
    logins.profile.familyName=req.body.profile.familyName;

  //  .substr(0,req.body.profile.email.length-2);
   logins.save(function (err) {
       // res.append('Access-Control-Allow-Origin', ['*']);
            if(err){

                res.json(err);
            }
            console.log("login successfull");
            res.json({
                status:"200 Ok",
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

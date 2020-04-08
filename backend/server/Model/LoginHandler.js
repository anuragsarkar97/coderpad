const mongoose= require('mongoose');


/*
User DAO  {@link-> userSchema}
 */
const loginSchema= new mongoose.Schema({
        username:{
        type: String,
        required:true,
    },
    profile:{
       googleId:{
                 type: String,
                required:true,
       },
        imageUrl:{
                 type: String,
                 required:true,
        },
        email:{
                 type: String,
                 required:true,
        },
        name:{
                 type: String,
                 required:true,
        },
        givenName:{
                 type: String,
                 required:true,
        },
        familyName:{
                 type: String,
                 required:true,
        },


    }


});
const Login= module.exports = mongoose.model('login',loginSchema,'loginData');

module.exports.get=function (callback, limit) {
Login.find(callback).limit(limit);
};

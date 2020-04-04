const mongoose= require('mongoose');
const Profile = require('./UserProfile');
/*
User DAO  {@link-> userSchema}
 */
const userSchema = mongoose.Schema({
    accessTokens: {
        type: String,
        required:true,
    },
    tokenId: {
        type: String,
        required:true,
    },
    profile:{
        type: Profile,

    }
});
const User= module.exports = mongoose.model('user',userSchema);

module.exports.get=function (callback, limit) {
User.find(callback).limit(limit);
};

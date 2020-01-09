// Install Neccessary dependencies
const mongoose = require('mongoose');
// Schema we will use to format Data when we enter in DB
const ProfileSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    joined: {
        type: Number, 
        default: (new Date()).getTime() 
    },
    followers: {
        type: Number
    },
    following: {
        type: Number
    },
    bio: {
        type: String
    },
    email: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    },
    reviews: {
        type: Number
    },
    // TODO, need to implement item schema
    // items: [{
    //     type: ObjectId, ref: 'Item'
    // }]
});
module.exports = Profile = mongoose.model('profile', ProfileSchema);
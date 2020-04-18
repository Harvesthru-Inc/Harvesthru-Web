const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    joined: {
        type: Date, 
        default: Date.now
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
    
    items: {
        type: [String],
        required: true
    },
});
module.exports = Profile = mongoose.model('profile', ProfileSchema);
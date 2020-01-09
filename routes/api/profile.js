// Install Neccessary Dependencies
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../.././models/Profile');
const User = require('../../models/User');

// @route GET api/profile/me (Get current User profile based on user ID in token)
// @desc  Get current users profile with JWT token passed in
// @access Private
router.get('/me', auth, async (req,res) => {
    try {
        const profile = await Profile.findOne({ User: req.user.id}).populate('User', ['name']);

        if(!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user'});
        }

        res.json(profile);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
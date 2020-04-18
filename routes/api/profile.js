const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { check, validationResult} = require('express-validator/check')

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
    try {
      const profile = await Profile.findOne({ user: req.user.id }).populate(
        'user',
        ['name', 'avatar']
      );
  
      if (!profile) {
        return res.status(400).json({ msg: 'There is no profile for this user' });
      }
  
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

// @route POST api/profile/ (Create or update a user profile)
// @desc  Get current users profile
// @access Private
router.post('/',
[
    auth,
    [
        check('email', 'Email is required')
        .not()
        .isEmpty()
    ]
],
 async (req, res) => {
     const errors = validationResult(req);
     if(!errors.isEmpty()) {
         return res.status(400).json({errors: errors.array()})
     }

     const {
        joined,
        followers,
        following,
        bio,
        email,
        verified,
        reviews,
        items
     } = req.body;

// Build Profile object
const profileFields = {};
profileFields.user = req.user.id
if(joined) profileFields.joined = joined;
if(followers) profileFields.followers = followers;
if(following) profileFields.following = following;
if(bio) profileFields.bio = bio;
if(email) profileFields.email = email;
if(verified) profileFields.verified = verified;
if(reviews) profileFields.reviews = reviews;
if(items) {
    profileFields.items = items.split(',').map(map => map.trim());
}

    try {
        let profile = await Profile.findOne({user: req.user.id});
        // Update id found
        if(profile) {
            profile = await Profile.findOneAndUpdate({ user: req.user.id}, { $set: profileFields}, {new: true}
            );

            return res.json(profile);
        }

            // Create or init
        profile = new Profile(profileFields);

        await profile.save();
        res.json(profile);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});


// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
    try {
      const profiles = await Profile.find().populate('user', ['name', 'avatar']);
      res.json(profiles);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  // @route    GET api/profile/user/:user_id
  // @desc     Get profile by user ID
  // @access   Public
  router.get('/user/:user_id', async (req, res) => {
    try {
      const profile = await Profile.findOne({
        user: req.params.user_id
      }).populate('user', ['name', 'avatar']);
  
      if (!profile) return res.status(400).json({ msg: 'Profile not found' });
  
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      res.status(500).send('Server Error');
    }
  });

module.exports = router;

// Middleware to properly auth user, will be call if we need a route protected
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if there is no token to authenticate in the first place
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Now attempt to verify token
  try {
    await jwt.verify(token, config.get('jwtSecret'), (error, decoded)=>{
      if(error){
        res.status(401).json({ msg: 'Token is not valid' });
      }
      else{
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('something wrong with auth middleware')
    res.status(500).json({ msg: 'Server Error' });
  }
};
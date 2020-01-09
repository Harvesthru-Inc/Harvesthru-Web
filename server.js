// Install Necessary dependencies
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

// Calls connectDB in our config directory
connectDB();

// Must include for parsing our json objects (middleware)
app.use(express.json({ extended: false }));

// Custom defined routing from our API
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

// Builds to the client side on case where we are in production (to connect front with back end)
if (process.env.NODE_ENV === 'production') {
  // Sets our static file
  app.use(express.static('client/build'));

  // Sets up our default index route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Connect to Designated port
const PORT = process.env.PORT || 8000;
// Listen on created port to start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// Install Neccessary dependencies
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')
const profile = require('./routes/api/profile')
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Connect Database, see config folder for implementation
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/routes/api/users',users);
app.use('/routes/api/auth',auth);
app.use('/routes/api/profile',profile);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  // Building to client
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// init port for listening
const PORT = process.env.PORT || 8000;
// Listen on said port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Install Neccessary dependencies
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Connect Database, see config folder for implementation
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

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
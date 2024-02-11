const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes.js'); // Assuming contactRoutes.js contains your routes

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/contact';

// CORS options
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/contact/.', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'});
});

// Apply global CORS middleware
app.use(cors());

// Use contactRoutes
app.use('/', contactRoutes);

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your Express server once connected to MongoDB
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/server")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Enables CORS
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
  })
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

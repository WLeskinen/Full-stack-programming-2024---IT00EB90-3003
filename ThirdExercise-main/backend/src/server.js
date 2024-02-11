const mongoose = require('mongoose');
const app = require('./routes/contactRoutes.js')
const PORT = process.env.PORT || 3000;
const cors = require('cors')

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/contact';

app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from http://localhost:5173

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

  app.use(cors())

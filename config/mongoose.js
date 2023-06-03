const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://ashishbundela123:dRqMY8GZYk7zYrnV@cluster0.s6rewmw.mongodb.net/todolistapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Additional options if required
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Perform database operations here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

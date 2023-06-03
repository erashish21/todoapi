const express = require('express');
const connectToMongoDB = require('mongoose');
const port = process.env.PORT|| 3000;
const app = express();

// Import routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/task');

// Connect to MongoDB
connectToMongoDB.connect('mongodb://localhost/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Start the server
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});

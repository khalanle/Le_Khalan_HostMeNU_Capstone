const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// import routes
const entreeRoutes = require('./routes/entreeRoutes');
const cocktailRoutes = require('./routes/cocktailRoutes');
const dessertRoutes = require('./routes/dessertRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/entrees', entreeRoutes);
app.use('/api/cocktails', cocktailRoutes);
app.use('/api/desserts', dessertRoutes);
app.use('/api/auth', authRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/HostMeNU'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

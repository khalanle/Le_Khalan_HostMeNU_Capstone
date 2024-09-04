const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Import routes
const entreeRoutes = require('./routes/entreeRoutes');
const cocktailRoutes = require('./routes/cocktailRoutes');
const dessertRoutes = require('./routes/dessertRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Add a simple root route handler to avoid "Cannot GET /" errors
app.get('/', (req, res) => {
    res.send('Working!')
});

// API Routes
app.use('/api/entrees', entreeRoutes);
app.use('/api/cocktails', cocktailRoutes);
app.use('/api/desserts', dessertRoutes);
app.use('/api/auth', authRoutes);

// Serve static files in production mode
if (process.env.NODE_ENV === 'production') {
    // Serve the React frontend build folder
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    // If the request does not match any API route, serve the index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
    });
}

// MongoDB connection
const mongoURI = 'mongodb+srv://khalankimle:5vAMvST8iWrhjxuf@mongopractice.dlgeczi.mongodb.net/<YourDatabaseName>'; // Ensure to include the database name
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

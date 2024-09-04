const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const entreeRoutes = require('./routes/entreeRoutes');
const cocktailRoutes = require('./routes/cocktailRoutes');
const dessertRoutes = require('./routes/dessertRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Working!')
});

// Routes
app.use('/api/entrees', entreeRoutes);
app.use('/api/cocktails', cocktailRoutes);
app.use('/api/desserts', dessertRoutes);
app.use('/api/auth', authRoutes);

// mongo connection
const mongoURI = 'mongodb+srv://khalankimle:5vAMvST8iWrhjxuf@mongopractice.dlgeczi.mongodb.net/<YourDatabaseName>'; // Ensure to include the database name
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB error:', err));

// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

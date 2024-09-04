// mongoDB uri setup
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://khalankimle:5vAMvST8iWrhjxuf@mongopractice.dlgeczi.mongodb.net/';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

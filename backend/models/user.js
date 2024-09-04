const mongoose = require('mongoose');

// setup user schema to hold username / password
const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true
    }
    ,
    password: { 
        type: String,
        required: true
    },
});

// create and export model
module.exports = mongoose.model('User', UserSchema);
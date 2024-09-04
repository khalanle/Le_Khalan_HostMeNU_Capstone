const mongoose = require('mongoose');

// setup entree schema
const EntreeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [String],
    instructions: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('Entree', EntreeSchema);

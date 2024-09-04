const mongoose = require('mongoose');

// dessert schema
const DessertSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Dessert', DessertSchema);

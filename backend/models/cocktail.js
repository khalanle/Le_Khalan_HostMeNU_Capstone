const mongoose = require('mongoose');

// create cocktail schema setup
const CocktailSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Cocktail', CocktailSchema);

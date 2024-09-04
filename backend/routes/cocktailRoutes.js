// backend/routes/cocktailRoutes.js
const express = require('express');
const Cocktail = require('../models/cocktail');

const router = express.Router();

// get request
router.get('/', async (req, res) => {
    try {
        const cocktails = await Cocktail.find();
        res.status(200).json(cocktails);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cocktails' });
    }
});

// add cocktail
router.post('/', async (req, res) => {
    try {
        const cocktail = new Cocktail(req.body);
        await cocktail.save();
        res.status(201).json(cocktail);
    } catch (error) {
        res.status(500).json({ message: 'Error adding cocktail' });
    }
});

// update
router.put('/:id', async (req, res) => {
    try {
        const cocktail = await Cocktail.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(cocktail);
    } catch (error) {
        res.status(500).json({ message: 'Error updating cocktail' });
    }
});

// delete 
router.delete('/:id', async (req, res) => {
    try {
        await Cocktail.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Cocktail deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting cocktail' });
    }
});

module.exports = router;

const express = require('express');
const Dessert = require('../models/dessert');

const router = express.Router();
//get
router.get('/', async (req, res) => {
    try {
        const desserts = await Dessert.find();
        res.status(200).json(desserts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching desserts' });
    }
});
//add
router.post('/', async (req, res) => {
    try {
        const dessert = new Dessert(req.body);
        await dessert.save();
        res.status(201).json(entree);
    } catch (error) {
        res.status(500).json({ message: 'Error adding dessert' });
    }
});

//update
router.put('/:id', async (req, res) => {
    try {
        const dessert = await Dessert.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(dessert);
    } catch (error) {
        res.status(500).json({ message: 'Error updating dessert' });
    }
});

// delete dessert
router.delete('/:id', async (req, res) => {
    try {
        await Dessert.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Dessert deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting dessert' });
    }
});

module.exports = router;
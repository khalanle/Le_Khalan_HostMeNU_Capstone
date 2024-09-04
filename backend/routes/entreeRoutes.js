const express = require('express');
const Entree = require('../models/entree');
const router = express.Router();

// get entrees
router.get('/', async (req, res) => {
    try {
        const entrees = await Entree.find();
        res.status(200).json(entrees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching entrees' });
    }
});

// add entree
router.post('/', async (req, res) => {
    try {
        const entree = new Entree(req.body);
        await entree.save();
        res.status(201).json(entree);
    } catch (error) {
        res.status(500).json({ message: 'Error adding entree' });
    }
});

// update entree
router.put('/:id', async (req, res) => {
    try {
        const entree = await Entree.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(entree);
    } catch (error) {
        res.status(500).json({ message: 'Error updating entree' });
    }
});

// delete 
router.delete('/:id', async (req, res) => {
    try {
        await Entree.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Entree deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting entree' });
    }
});

module.exports = router;

const express = require('express');
const User = require('../models/user');
const router = express.Router();

// register username/password
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userExists = await User.findOne({ username });
        if (userExists) return res.status(400).json({ message: 'Sorry, that username is already taken' });

        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'Success!' });
    } catch (error) {
        res.status(500).json({ message: 'Error!' });
    }
});

// login status 
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (!user) return res.status(400).json({ message: 'Sorry, try that again' });

        res.status(200).json({ message: 'Login Success!', userId: user._id });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
});

module.exports = router;

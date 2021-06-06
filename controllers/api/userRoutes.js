const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Post } = require('../../models');


// Route gets all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Route gets user and all the post made by the users
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{ model: Post }]
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err)
    }
});

// Adds a new user.
router.post('/', async (req, res) => {
    try {
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password, 10);
        const userData = await User.create(newUser);
        res.status(200).json(userData);
    }  catch (err) {
       res.status(400).json(err)
    }
});





module.exports = router;
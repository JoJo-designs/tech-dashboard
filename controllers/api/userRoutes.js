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


//  HERE IS WHERE I AM TRYING TO ADD A NEW USER AND MAKE A SEsSION REQUEST
// I THINK I NEED A HOOK IN THE USER MODELS FOR IT TO WORK
// Adds a new user.
router.post('/', async (req, res) => {
    try {
        const newUserData = await User.create({
            email: req.body.email,
            user_name: req.body.user_name,
            password: req.body.password,
        })

        req.sessions.save(() => {
            req.sessions.loggedIn = true;

            res.status(200).json(newUserData);
        });
    }  catch (err) {
       console.log(err);
       res.status(500).json(err);
    }
});

// working post request doesn't create a session I think I will need that
// no examples that makes a session and encrptys password but also has sign ups a user
// router.post('/', async (req, res) => {
//     try {
//         const newUser = req.body;
//         newUser.password = await bcrypt.hash(req.body.password, 10);
//         const userData = await User.create(newUser);
//         res.status(200).json(userData);
//     }  catch (err) {
//        res.status(400).json(err)
//     }
// });   

module.exports = router;
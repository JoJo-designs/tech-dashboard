const router = require('express').Router();
const { User, Post } = require('../../models');

// Route /api/user/

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
        console.log(newUserData.id)

        req.session.save(() => {
            req.session.user_id = newUserData.id;
            req.session.loggedIn = true;

            res.status(200).json(newUserData);
        });
    }  catch (err) {
       console.log(err);
       res.status(500).json(err);
    }
});

// logs in a user 
router.post('/login', async (req, res) => {
    console.log(req.body)
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log(userData)
        if (!userData) {
            res
            .status(400)
            console.log("wrong data\n")
            .json({ message: 'incorrect email or password, please try again' });
            return;
        }
        
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.json(400)
            console.log("wrong password\n")
            .json({ message: 'incorrect email or password, please try again' });
            return;
        }
        // console.log(userData)

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ message: 'logged in successful' })
            // console.log(req.sessionID)
            // console.log(userData.id)
        })

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(204).end();
    } 
});

module.exports = router;
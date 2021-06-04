const router = require('express').Router();
const { Comments, User } = require('../../models')


// Route gets all users
router.get('/', async (req, res) => {
    try {
        const commentData = await Comments.findAll({
            include: [{ model: User }]
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const commentData = await Comments.create(req.body);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
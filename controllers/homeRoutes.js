const router = require('express').Router();
const { User, Comments, Post } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try {
      res.render('homepage', { homepage });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
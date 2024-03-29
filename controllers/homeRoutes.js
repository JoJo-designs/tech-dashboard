const router = require('express').Router();
const { User, Comments, Post } = require('../models');
const withAuth = require('../utils/auth');


// route renders the home page
router.get('/', async (req,res) => {
    try {
      const postData = await Post.findAll({
        include: [{ model: User }]
      });

      const posts = postData.map((post) => post.get({ plain: true }));
      res.render('homepage', { posts });
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
});

// route renders the login page
router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

// route renders the sign up page
router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

// route renders the dashboard for each user. 
//  will need an Id and log in data but I will make a filler for now
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userUniqueId = req.session.user_id

    const userData = await User.findOne({ where: {id: userUniqueId}, 
       include: [{ model: Post }] 
    });

    //const userOne = userData.map((user) => user.get({ plain: true }));    
    res.render('dashboard', { user: userData.get({ plain: true}) });
    //res.render('dashboard', { userOne });
  } catch (err) {
    res.status(500).json(err);
  }
});

// opens the new post handlebars when the user user the new post button
router.get('/newpost', withAuth, async (req, res) => {
  try {
    res.render('newpost');
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    let post = await Post.findByPk(req.params.id);

    post = post.get({ plain: true });

    res.render('edit', {post});
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
const router = require('express').Router();
const { User, Post, Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// Route /api/post/

// Route gets all Post with users
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],  
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// gets one post and related comments with an id. I need a way to match up 
// user ids to comments and the post
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: Comments }]
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// next two routes do not work in insomina.
// router.put('/:id', withAuth,  async (req, res) => {
//     try {
//         const editPost = await Post.update({
//             where: { id: req.params.id },
//             ...req.body,
//             //user_id: req.session.user_id,
//         });
//         res.status(200).json(editPost)
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.put('/:id', withAuth, async (req, res) => {
//     try {
//         const editPost = await Post.update({
//             where: { id: req.params.id },
//             posted_on: Date.now(),
//             post_title: req.body.post_title,
//             post_content: req.body.post_content,
//             user_id: req.session.user_id,
//         });
//         res.status(200).json(editPost)
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// this works in insomina
router.put('/:id', (req, res) => {
    console.log("hello")
    Post.update(
        {
           post_title: req.body.post_title,
           post_content: req.body.post_content,
        },
        {
            where: {
                id: req.params.id,
            }
        },
    )
    .then((updatePost) => {
        res.json(updatePost);
    })
    .catch((err) => res.json(err));
});
   

// adds a new post
router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });


// delete a post from the data base
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;

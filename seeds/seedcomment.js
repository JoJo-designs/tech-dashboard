const { Comments } = require('../models')

const commentData = [
    {
        content: "Java Script is not perfect but it is not bad.",
        user_id: 1,
        post_id: 3,
    },
    {
        content: "I like flexbox.",
        user_id: 2,
        post_id: 2,
    },
    {
        content: "But a css frame work is easier to use.",
        user_id: 3,
        post_id: 2,
    },
    {
        content: "Very informative.",
        user_id: 3,
        post_id: 1,
    },
    {
        content: "Data storage YAH.",
        user_id: 2,
        post_id: 4,
    },
]

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
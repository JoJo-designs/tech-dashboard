const { Post } = require('../models')

const postData = [
    {
        post_title: "What is the Differance Between Post and Put",
        post_content: "A post is used to add new data to a database well a put is used to update data.",
        user_id: 1,
    },
    {
        post_title: "Flex, Positioning Or Css framework",
        post_content: "There are three ways to make coloums on a html. we can user flexboxes, positioning or a css framework",
        user_id: 1,
    },
    {
        post_title: "Is java script good?",
        post_content: "I want to know if Java script is a programing good lauguage",
        user_id: 2,
    },
    {
        post_title: "Databases",
        post_content: "A database is a place where data is stored.",
        user_id: 3,
    },
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
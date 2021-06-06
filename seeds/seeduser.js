const { User } = require('../models')

const userData = [
    {
        user_name: "WowTech",
        email: "email@email.com",
        password: "IloveTEch",
    },
    {
        user_name: "LuckTechGeek293",
        email: "email@cool.com",
        password: "thisISMYpuppy",
    },
    {
        user_name: "I like tech",
        email: "emailhahaha.com",
        password: "dontforgetmypassword"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
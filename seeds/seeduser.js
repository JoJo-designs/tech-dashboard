const { User } = require('../models')

const userData = [
    {
        user_name: "WowTech",
        password: "IloveTEch",
    },
    {
        user_name: "LuckTechGeek293",
        password: "thisISMYpuppy",
    },
    {
        user_name: "I like tech",
        password: "dontforgetmypassword"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
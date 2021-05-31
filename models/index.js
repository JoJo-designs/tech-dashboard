const Post = require('./post');
const User = require('./user');
const Comments = require('./comments');


User.hasMany(Post, {
    as: 'post'
});

Post.hasOne(User, {
    foreignKey: 'user_id',
    as: "user"
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Comments.belongsTo(User, {
//     foreignKey: 'user_id'
// });

Post.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

// Comments.hasOne(Post, {
//     foreignKey: 'post_id'
// });

module.exports = { User, Post, Comments };
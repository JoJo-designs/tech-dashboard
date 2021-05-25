const { Model, DataType } = require('sequelize');
const sequelize = require('../config/connection')

class Posts extends Model {}

    Posts.init(
        {
            id: { //post Id used to find post and comments for the post
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            posted_on: { // date the post was made
                type: DataType.DATE,
                allowNull: false,
                defaultValue: DataType.NOW,
            },
            post_title: {
                type: DataType.STRING,
                allowNull: false,
            },
            post_content: { // content of the post I think I should put a limited on characters at some point
                type: DataType.STRING,
                allowNull: false,
            },
            user_id: { // used to get the id of the user who posted it so we can get the user name.
                type: DataType.INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: false,
            modelName: 'posts'
        }
    );

    module.exports = Posts;
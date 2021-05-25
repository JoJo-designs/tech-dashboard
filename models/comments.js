const { Model, DataType } = require('sequelize');
const sequelize = require('../config/connection')

class Comments extends Model {}

    Comments.init(
        {
            id: { // comment unique Id
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            added_on: { // the date the comment was added to a post
                type: DataType.DATE,
                allowNull: false,
                defaultValue: DataType.NOW,
            },
            content: { // the content of the comment. should add a limit to characters
                type: DataType.STRING,
                allowNull: false,
            },
            user_id: { // gets the user who commented 
                type: DataType.INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
            post_id: { // gets the id of the post the comment is connect to.
                type: DataType.INTEGER,
                references: {
                    model: 'posts',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: false,
            modelName: 'user',
        }
    );

    module.exports = Comments;
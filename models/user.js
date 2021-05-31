const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class User extends Model {}

    User.init(
        {
            id: { // Users unique Id
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            user_name: { // users name must be unique to the user
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: { // password must be 8 characters longs
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [8],
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

    module.exports = User;
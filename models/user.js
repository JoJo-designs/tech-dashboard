const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection')

class User extends Model { 
    checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
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
            email: { // unique email for each user.
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true, 
                },
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
            hooks: {
                async beforeCreate(newUserData) {
                  newUserData.password = await bcrypt.hash(newUserData.password, 10);
                  return newUserData;
                },
            },
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: false,
            modelName: 'user',
        }
    );

    module.exports = User;
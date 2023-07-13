const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class UserItems extends Model {}

// the tags that will be used to find items
UserItems.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // keeps track of which user
    user_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    // keeps track of which item (within the user)
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'item',
            key: 'id'
        }
    },
    item_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: 'userItems'
});

module.exports = UserItems;
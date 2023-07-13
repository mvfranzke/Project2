const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class ItemTag extends Model {}

// table for relating many items to many tags 
// and many tags to many items
ItemTag.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    item_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag_id: {
        type: DataTypes.STRING
    },
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: 'itemTag'
});

module.exports = ItemTag;
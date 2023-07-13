const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Category extends Model {}

// the tags that will be used to find items
Category.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: 'category'
});

module.exports = Category;
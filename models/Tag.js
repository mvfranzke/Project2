const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Tag extends Model {}

// the tags that will be used to find items
Tag.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tag_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: 'tag'
});

module.exports = Tag;
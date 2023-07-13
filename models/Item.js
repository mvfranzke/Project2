const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');
const qr = require('qrcode');

class Item extends Model {
    // generates a QR code based on the url grabbed at 
    generateQR = async (url) => {
        const fileNameQR = `/images/item-qr-codes/${this.item_name.toLowerCase().replace(/ /g, '-')}.png`;

        // create a .png file with this item's name as the file name
        await qr.toFile(`${__dirname}/../public/${fileNameQR}`, url, { type: 'png' });

        // set this item's item_QR property to be the path to its respective qr code
        // only update this.item_QR if it's not equal to our current endpoint
        if(this.item_QR != fileNameQR){
            await this.update({item_QR: fileNameQR});
        }
    }
}

// our virtual items
Item.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    item_url: {
        type: DataTypes.STRING
    },
    item_QR: {
        type: DataTypes.TEXT
    },
    item_img: {
        type: DataTypes.STRING
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
            key: 'id'
        }
    },
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: 'item'
});

module.exports = Item;
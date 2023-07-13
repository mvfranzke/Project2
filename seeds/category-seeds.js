const { Category } = require('../models');

// initial dataset for our categories
// FUTURE FEATURE: when a category is created, store it in categoryData
// FUTURE FEATURE: populate this array from a separate file
const categoryData = [
    {// id 1
        category_name: 'head'
    },
    {
        category_name: 'shoulders'
    },
    {
        category_name: 'upper'
    },
    {
        category_name: 'lower'
    },
    {// id 5
        category_name: 'hands'
    },
    {
        category_name: 'feet'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
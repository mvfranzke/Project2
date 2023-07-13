const sequelize = require('../config/index');

const seedCategories = require('./category-seeds');
const seedItems = require('./item-seeds');
// const seedUsers = require('./user-seeds');
// will uncomment users once front-end has an MVP

// overwrites our models with our pre-written seeds, located in this folder
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('===== DATABASE SYNCED =====');
    await seedCategories();
    console.log('===== CATEGORIES SYNCED =====');
    await seedItems();
    console.log('===== ITEMS SYNCED =====')
    // await seedUsers();
    // console.log('===== USERS SYNCED =====')
    process.exit(0);
};

seedAll();
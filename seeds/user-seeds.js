const { User } = require('../models');

const userData = [
    {
        username: "testing",
        password: "testing"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
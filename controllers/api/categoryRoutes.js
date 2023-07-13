const router = require('express').Router();
const { Category } = require('../../models');
const withAuth = require("../../utils/auth");

// Endpoint: /api/categories

router.get('/', withAuth, async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (err){
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        await Category.create(req.body);
        res.status(200).json(`'${req.body.category_name}' category has been created.`);
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;
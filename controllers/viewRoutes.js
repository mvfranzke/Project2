const router = require('express').Router();
const User = require('../models/User');
const Item = require('../models/Item');

// the home endpoint
router.get('/', async (req, res) => { 
  res.render('home');
});

router.get('/login', async (req, res) => {
  res.render('login');
});


router.get("/owned", async (req, res) => {
  res.render("owned");
});

router.get("/about", async (req, res) => {
  res.render("about");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

// display singular item info for user
router.get('/item/:id', async(req, res) => {
  try {
    // grabbing the current url with the following variables:
    const port = ':3001' // DELETE THIS WHEN HOSTED ON HEROKU
    const fullUrl = `${req.protocol}://${req.hostname}${port}${req.originalUrl}`;
    
    // grabbing item data from our database
    let itemData = await Item.findByPk(req.params.id);
    await itemData.generateQR(fullUrl);
    const item = itemData.get({ plain: true });
    res.render('item', {item} );

  } catch (err) {
    res.status(500).json(err);
  }
});

// sets the url endpoint to /marketplace
router.get('/marketplace', async (req, res) => {
  try {
      const itemData = await Item.findAll();
      const items = itemData.map((item) => item.get({ plain: true }));
      res.render('marketplace', { items });

  } catch (err){
      res.status(500).json(err);
  }
});

module.exports = router;

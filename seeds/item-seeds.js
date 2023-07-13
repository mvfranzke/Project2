const { Item } = require('../models');

const itemData = [
  {
    item_name: "Fancy Hat",
    description:
      "This hat is quite fancy. One will look quite dapper when wearing it.",
    price: 999999999,
    stock: 1,
    item_img: "/images/fancy-hat.png",
    category_id: 1,
  },
  {
    item_name: "Tattered Shirt",
    description: "Looks like you need a new shirt.",
    price: 0,
    stock: 99999,
    item_img: "/images/tattered-shirt.png",
    category_id: 3,
  },
  {
    item_name: "Torn Trousers",
    description: "The cuts make them more expensive.",
    price: 100,
    stock: 25,
    item_img: "/images/torn-trousers.png",
    category_id: 4,
  },
  {
    item_name: "A Single Glove",
    description: "Wearing one glove is better than two.",
    price: 25,
    stock: 100,
    item_img: "/images/a-single-glove.png",
    category_id: 5,
  },
  {
    item_name: "Nice Boots",
    description: "Yup. Those are some nice boots.",
    price: 250,
    stock: 10,
    item_img: "/images/nice-boots.png",
    category_id: 6,
  },
  {
    item_name: "Red Blazer",
    description: "Here's my business card.",
    price: 1000,
    stock: 17,
    item_img: "/images/red-blazer.png",
    category_id: 3,
  },
  {
    item_name: "Overalls",
    description: "These aren't just for farmers.",
    price: 1,
    stock: 123,
    item_img: "/images/overalls.png",
    category_id: 4,
  },
  {
    item_name: "Drink Hat",
    description: "I can get drunk with no hands!",
    price: 10,
    stock: 74,
    item_img: "/images/drink-hat.png",
    category_id: 1,
  },
  {
    item_name: "Beach Sandals",
    description: "Wear these when you don't want to put on socks",
    price: 5,
    stock: 99,
    item_img: "/images/beach-sandals.png",
    category_id: 6,
  },
  {
    item_name: "Biker Gloves",
    description:
      "I don't actually have a motorcycle, I just think they're cool.",
    price: 8,
    stock: 7,
    item_img: "/images/biker-gloves.png",
    category_id: 5,
  },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;
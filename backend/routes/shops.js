const express = require('express');
const {
  getShops,
} = require('../controllers/shops');

const shopsRoutes = express.Router();

shopsRoutes.get('/shops', getShops);

exports.shopsRoutes = shopsRoutes;
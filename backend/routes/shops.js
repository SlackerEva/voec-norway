const express = require('express');
const {
  getShops, getCountriesCode,
} = require('../controllers/shops');

const shopsRoutes = express.Router();

shopsRoutes.get('/shops', getShops);
shopsRoutes.get('/shops/countries', getCountriesCode);

exports.shopsRoutes = shopsRoutes;
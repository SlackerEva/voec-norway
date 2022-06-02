const express = require('express');
const {
  getShops, getCountriesCode, getFilteredShops, getImageFromStorage,
} = require('../controllers/shops');

const shopsRoutes = express.Router();

shopsRoutes.get('/shops', getShops);
shopsRoutes.patch('/shops/filteredShops', getFilteredShops);
shopsRoutes.get('/shops/countries', getCountriesCode);
shopsRoutes.get('/storage/*', getImageFromStorage);

exports.shopsRoutes = shopsRoutes;
const express = require('express');
const { getProducts } = require('./reposController');
const { isLoggedIn, notLoggedIn } = require('../../utils/login');

const router = express.Router();

router.get('/product-list', isLoggedIn, getProducts);

router.get('/import', isLoggedIn, function(req, res, next) {
    res.render('repository/import');
});

router.get('/inventory', isLoggedIn, function(req, res, next) {
  res.render('repository/inventory');
});

module.exports = router;
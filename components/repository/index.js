const express = require('express');
const router = express.Router();
const { getProducts } = require('./reposController')

router.get('/product-list', getProducts);

router.get('/import', function(req, res, next) {
    res.render('repository/import');
});

module.exports = router;
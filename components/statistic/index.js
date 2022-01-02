const express = require('express');
const { isLoggedIn, notLoggedIn } = require('../../utils/login');
const { statistic } = require('./statisticController')

const router = express.Router();

router.get('/statistic', isLoggedIn, statistic);

module.exports = router;
const express = require('express');
const { route } = require('./admin');
const router = express.Router();



router.get('/',(req, res, next) => {
    res.send('<h2>Hello from express<h2>');
});

module.exports = router;
const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
    const { title } = req.body;
    console.log(title);
    res.redirect('/');
});

router.get('/contact-us', (req, res) => {
    res.sendFile(path.join(rootDir, 'views','contact-us.html'));
});

router.get('/success', (req, res) => {
    res.send('<h1>Form Submitted successfully</h1>')
});

module.exports = router;

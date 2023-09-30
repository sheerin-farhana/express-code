const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware");
    next();
});

app.use((req, res, next) => {
    console.log("In another the middleware");
    res.send('<h2>Hello from express<h2>');
});

app.listen(3000);
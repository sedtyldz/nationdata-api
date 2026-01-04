
const ExpressObject = require('express');

const app = ExpressObject();

app.use(ExpressObject.json());

app.set('view engine', 'ejs');
app.use(ExpressObject.static('public'));


module.exports = app;
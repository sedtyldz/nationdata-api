
const ExpressObject = require('express');

const app = ExpressObject();

app.use(ExpressObject.json());

module.exports = app;
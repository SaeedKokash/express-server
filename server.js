/* eslint-disable no-undef */
'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

// Create a / route using GET method within your server.js and return Hello World as a proof of life.
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

// Create a /person route using POST method within your server.js that will receive a persons name, age, gender.
app.post('/person', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    const gender = req.query.gender;
    const newAge = parseInt(age) + 5
    res.status(200).send(`${newAge}`);
});

function start(port) {
    app.listen(PORT, () => console.log(`Server Starting on ${PORT}`));
}

module.exports = {
    app: app,
    start: start,
};
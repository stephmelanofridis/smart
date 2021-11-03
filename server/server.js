const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.connect('open', () => {
    app.listen(PORT, () => console.log(`Now running on localhost:${PORT}`));
});


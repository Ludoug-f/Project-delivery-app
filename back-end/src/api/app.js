const express = require('express');
const cors = require('cors');
const route = require('./Routes');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', route.routerLogin);

module.exports = app;

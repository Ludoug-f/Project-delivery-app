const express = require('express');
const cors = require('cors');
const ctrlLogin = require('./Controllers/controllerLogin');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', (req, res) => ctrlLogin.Login(req, res));

module.exports = app;


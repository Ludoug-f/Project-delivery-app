const express = require('express');
const cors = require('cors');
const route = require('./Routes');
const routerProducts = require('./Routes/routerProducts');

const app = express();
app.use(cors());
app.use(express.json());
app.use (routerProducts);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', route.routerLogin);
app.use('/products', route.routerProducts);

module.exports = app;

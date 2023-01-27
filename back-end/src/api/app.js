const express = require('express');
const cors = require('cors');
const route = require('./Routes');
const routerProducts = require('./Routes/routerProducts');
const routerIMG = require('./Routes/imagesRoutes/routeIMG');

const app = express();
app.use(express.json());
app.use(cors());
app.use(routerProducts);
app.use('/images', routerIMG);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', route.routerLogin);
app.use('/products', route.routerProducts);

module.exports = app;

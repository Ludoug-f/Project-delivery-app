const express = require('express');
const cors = require('cors');
const route = require('./Routes');
const routerProducts = require('./Routes/routerProducts');
const routerIMG = require('./Routes/imagesRoutes/routeIMG');
const routerRegister = require('./Routes/routerRegister');
const routerUser = require('./Routes/routerUser');
// const routerSales = require('./Routes/routerSales');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
// app.use(routerSales);
app.use(routerProducts);
app.use('/images', routerIMG);
app.use('/login', route.routerLogin);
app.use('/register', route.routerRegister);
app.use(routerRegister);
app.use(routerUser);

module.exports = app;

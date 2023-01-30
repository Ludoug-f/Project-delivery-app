const express = require('express');
const cors = require('cors');
const route = require('./Routes');

const routeUser = require('./Routes/routerUser');
const seller = require('./Routes/routerSeller');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', route.routerLogin);
// app.use('/regiser', route.routerUser);
app.use(routeUser);
app.use(seller)

module.exports = app;

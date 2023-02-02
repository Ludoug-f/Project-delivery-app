const express = require('express');
const cors = require('cors');
const path = require('path');
const route = require('./Routes');

// const routeUser = require('./Routes/routerUser');
const admin = require('./Routes/routerAdmin');
const routerProducts = require('./Routes/routerProducts');
const routerRegister = require('./Routes/routerRegister');
const routerUser = require('./Routes/routerUser');
// const routerSales = require('./Routes/routerSales');

const app = express();
app.use(express.json());

app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
// app.use(routerSales);
app.use('/images', express.static(path.join(__dirname, '..', '..', 'public')));
app.use('/login', route.routerLogin);
// app.use('/regiser', route.routerUser);
// app.use(routeUser);
app.use(admin);
app.use('/register', route.routerRegister);
app.use('/sales', route.routerSales);

app.use(routerRegister);
app.use(routerUser);
app.use(routerProducts);

module.exports = app;

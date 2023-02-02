const express = require('express');
const cors = require('cors');
const route = require('./Routes');

// const routeUser = require('./Routes/routerUser');
const admin = require('./Routes/routerAdmin');
const routerProducts = require('./Routes/routerProducts');
const routerIMG = require('./Routes/imagesRoutes/routeIMG');
const routerRegister = require('./Routes/routerRegister');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(routerProducts);
app.use('/images', routerIMG);
app.use('/login', route.routerLogin);
// app.use('/regiser', route.routerUser);
// app.use(routeUser);
app.use(admin);
app.use('/register', route.routerRegister);
app.use(routerRegister);

module.exports = app;

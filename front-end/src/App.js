import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import ProdProvider from './components/ProdContext/Provider';

function App() {
  return (
    <Switch>
      <Route path="/customer/products">
        <ProdProvider>
          <Products />
        </ProdProvider>
      </Route>
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/register" component={ Register } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;

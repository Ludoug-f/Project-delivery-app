import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import Seller from './pages/Seller';
import ProdProvider from './components/ProdContext/Provider';
import Admin from './pages/Admin';
import Details from './pages/Details';
import Customer from './pages/Customer';

function App() {
  return (
    <Switch>
      <Route path="/customer/products">
        <ProdProvider>
          <Products />
        </ProdProvider>
      </Route>
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/customer/orders/:id" component={ Details } />
      <Route path="/customer/orders" component={ Customer } />

      <Route path="/admin/manage" component={ Admin } />
      <Route path="/register" component={ Register } />
      <Route path="/seller/orders" component={ Seller } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;

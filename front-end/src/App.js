import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
      <Switch>
        {/* <Route path="/register" component={ Register } /> */}
        <Route path="/" component={ Login } />
      </Switch>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/register" component={ Register } />
        <Route path="/login" component={ Login } />
        <Route exact path="/" component={ Main } />
      </Switch>
    </main>
  );
}

export default App;

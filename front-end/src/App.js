import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'; // BrowserRouter, Routes, 
// import { Redirect } from 'react-router-dom';
import Login from './login';
import Register from './register';

function App() {
  // return (
  //   <div className="App">
  //     <span className="logo">TRYBE</span>
  //     <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
  //       Glass
  //     </object>
  //     <Route path='/' element={ <Redirect to='/login' /> }/>
  //   </div>
  // );
  // return <Route path='/' element={ <Redirect to='/login' /> }/>;
  return (
    <BrowserRouter>
      <Route
        path="/"
        element={ <Redirect to="/login" /> }
      />
      <Route
        path="/login"
        element={ <Login /> }
      />
      <Route
        path="/register"
        element={ <Register /> }
      />
    </BrowserRouter>
  );
}

export default App;

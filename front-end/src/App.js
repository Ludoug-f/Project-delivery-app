import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
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
      <Routes>
        <Route
          path='/'
          element={ <Redirect to='/login' /> }
        />
        <Route
          path='/login'
          element={ <Login /> }
        />
        <Route
          path='/register'
          element={ <Register /> }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

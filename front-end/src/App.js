import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Redirect } from 'react-router-dom';

function App() {
  // return (
  //   <div className="App">
  //     <span className="logo">TRYBE</span>
  //     <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
  //       Glass
  //     </object>
  //     <Route path='/' element={ <Redirect to="/login" /> }/>
  //   </div>
  // );
  return <Route path='/' element={ <Redirect to="/login" /> }/>;
}

export default App;

import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import {Route , Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/Login" element={<Login/>}></Route>
    </Routes>
  );
}

export default App;


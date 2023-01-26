import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Signup from './Signup';
import {Route , Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
    </Routes>
  );
}

export default App;


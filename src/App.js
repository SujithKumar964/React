import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import {BrowserRouter as Router ,Route , Routes} from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={Home}></Route>
        <Route path='/login' element={Login}></Route>
      </Routes>
  );
}

export default App;


import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage';
import LandingPage from "./components/LandingPage";
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Route path='/home' component={Navbar} />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={HomePage} />
      <Route exact path='/create' component={Form} />

      {/* //faltan rutas para tipos de dietas y el detalle de las recetas */}
      
    </div>
  );
}

export default App;

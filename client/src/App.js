import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/Home/HomePage';
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form.js';
import Details from './components/Detail/Details';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Navbar} />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={HomePage} />
      <Route exact path='/create' component={Form} />
      <Route exact path='/recipes/:id' component={Details} />

      
    </div>
  );
}

export default App;

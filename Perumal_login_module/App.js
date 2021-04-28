import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom"

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './components/Login';
import Feed from './components/Feed';



function App() {
  const name = 'Comorins';

  return (
    <div className="App">
      <Router>

      <Header ourName = {name} />
        <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
            <Route path="/home">
                <h2>Home page content</h2>
            </Route>
            <Route path="/Feed">
                <Feed />
            </Route>
            <Route path="/about">
                <h2>About page content</h2>
            </Route>
        </Switch>
      <Footer />
      </Router>
      
    </div>

    
  );
}

export default App;

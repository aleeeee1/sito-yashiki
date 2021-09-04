import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Pranzo from './components/pages/Pranzo';
import Cena from './components/pages/Cena';
import Info from './components/pages/Info';
import TOS from './components/pages/Tos'
import o404 from "./components/pages/Not-found"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/pranzo' component={Pranzo} />
          <Route path='/cena' component={Cena} />
          <Route path='/info' component={Info} />
          <Route path='/ToS' component={TOS} />
          <Route path exact ='/'><Redirect to="/home" /></ Route>
          <Route component={o404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

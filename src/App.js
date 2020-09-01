import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/layout/Navbar';
import Home from './components/projects/Home';
import Projects from './components/projects/Projects';
import Modpod from './components/projects/portfolioPieces/Modpod/Modpod';
import Echo from './components/projects/portfolioPieces/ECHO/Echo';
import './App.css';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <div className='App'>
            <Navbar title="Adam's Portfolio" />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/projects/modpod' component={Modpod} />
              <Route exact path='/projects/echo' component={Echo} />
            </Switch>
          </div>
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Modpod from './Modpod';
import Blade from './Blade';
import Branding from './Branding';
import Portfolio from './Portfolio';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} basename='/'>
        <ScrollToTop />
        <div>
          <Switch>
            <Route exact={true} path='/' render={() => <Home />} />
            <Route exact={true} path='/modpod' render={() => <Modpod />} />
            <Route exact={true} path='/blade' render={() => <Blade />} />
            <Route exact={true} path='/arc' render={() => <Branding />} />
            <Route
              exact={true}
              path='/portfolio'
              render={() => <Portfolio />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Modpod from './Modpod';
import Blade from './Blade';
import Home from './Home';
import Projects from './Projects';
import { HashRouter, Switch, Route } from 'react-router-dom';
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
      // Changed HashRouter to BrowserRouter ... if it doesn't work when deployed to GitHub Pages, just change it back. Worst case, your route paths will have a /#/ before it.

      // edit: it didn't work. Later I'll see about deploying to Heroku or something.
      <HashRouter
        onUpdate={() => window.scrollTo(0, 0)}
        basename={process.env.PUBLIC_URL}
      >
        <ScrollToTop />
        <div>
          <Switch>
            <Route
              exact={true}
              // for the path, in order for this to work, you have to include "process.env.PUBLIC_URL" before the path name.

              //Do this for all paths and make sure to change it in the ProjectCard.js component & each {project}.js component
              path={'/'}
              render={() => <Home />}
            />
            <Route
              exact={true}
              // for the path, in order for this to work, you have to include "process.env.PUBLIC_URL" before the path name.

              //Do this for all paths and make sure to change it in the ProjectCard.js component & each {project}.js component
              path={'/projects'}
              render={() => <Projects />}
            />
            <Route
              exact={true}
              path={'/projects/modpod'}
              render={() => <Modpod />}
            />
            <Route
              exact={true}
              path={'/projects/blade'}
              render={() => <Blade />}
            />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

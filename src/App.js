import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainNav from './components/layout/MainNav';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollSocials from './components/layout/ScrollSocials';
import Home from './components/projects/Home';
import NotReady from './components/layout/NotReady';
import Projects from './components/projects/Projects';
import Explorations from './components/projects/Explorations';
import Modpod from './components/projects/portfolioPieces/Modpod/Modpod';
import Echo from './components/projects/portfolioPieces/ECHO/Echo';
import Footer from './components/layout/Footer';
import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Router onUpdate={() => window.scrollTo(0, 0)} basename='/'>
          <ScrollTop />
          <div className='App'>
            <MainNav />
            <ScrollSocials />
            {/* <div id='mainContentDiv'> */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/projects/modpod' component={Modpod} />
              <Route exact path='/projects/echo' component={Echo} />
              <Route exact path='/explorations' component={Explorations} />
              <Route exact path='/notready' component={NotReady} />
            </Switch>
            {/* </div> */}
            <ScrollToTop />
            <Footer />
          </div>
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;

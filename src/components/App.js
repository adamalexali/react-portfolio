import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainNav from './MainNav';
import ScrollToTop from './ScrollToTop';
import ScrollSocials from './ScrollSocials';
import Home from './Home';
import NotReady from './NotReady';
import Projects from './Projects';
import Explorations from './Explorations';
import Modpod from './projects/Modpod';
import Footer from './Footer';
import '../CSS/App.css';
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
              <Route exact path='/projects/echo' component={NotReady} />
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

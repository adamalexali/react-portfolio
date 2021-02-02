import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainNav from './MainNav';
import ScrollToTop from './ScrollToTop';
import ScrollSocials from './ScrollSocials';
import Home from './Home';
import NotReady from './NotReady';
import ProjectPage from './ProjectPage';
import Projects from './Projects';
import Explorations from './Explorations';
import Anamorphic from './projects/Anamorphic';
import LinkMentalHealth from './projects/LinkMentalHealth';
import Echo from './projects/Echo';
import Measure from './projects/Measure';
import Modpod from './projects/Modpod2';
import Lotus from './projects/Lotus';
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
              <Route exact path='/projects/anamorphic' component={Anamorphic} />
              <Route
                exact
                path='/projects/linkmentalhealth'
                component={LinkMentalHealth}
              />
              <Route exact path='/projects/echo' component={Echo} />
              <Route exact path='/projects/measure' component={Measure} />
              <Route exact path='/projects/modpod' component={Modpod} />
              <Route exact path='/projects/lotus' component={Lotus} />
              <Route exact path='/explorations' component={Explorations} />
              <Route exact path='/projectPage' component={ProjectPage} />
              <Route exact path='/unavailable' component={NotReady} />
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

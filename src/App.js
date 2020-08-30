import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ProjectItem from './components/projects/ProjectItem';
import Projects from './components/projects/Projects';
import Modpod from './components/projects/portfolioPieces/Modpod/Modpod';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar title="Adam's Portfolio" />
          <Switch>
            <Route exact path='/' render={(props) => <ProjectItem />} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/projects/modpod' component={Modpod} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

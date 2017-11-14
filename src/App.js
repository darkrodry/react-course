import React, { Component } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';

import ContactPage from './components/Pages/ContactPage';
import UsersPage from './components/Pages/UsersPage';
import Navigation from './components/Navigation';

class App extends Component {

  /* Render methods */
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={UsersPage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

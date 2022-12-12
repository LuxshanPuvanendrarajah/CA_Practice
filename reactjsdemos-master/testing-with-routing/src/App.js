import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <>
      <h1>Learn React</h1>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';
import Splash from './Splash'
import About from './About'
import Nav from './Nav'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Home from './Home'
import Bootstrap from 'bootstrap'

function App() {
  const [pageView, setPageView] = useState(0);

  return (
    <div className="App">
      <Router>
      {pageView === 0 ?
        <Splash
          setPageView={setPageView}
          pageView={pageView}
        /> : <Nav />}
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route exact={true} path="/about">
            <About />
          </Route>
          <Route exact={true} path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact={true} path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;

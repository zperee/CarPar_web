import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container} from "react-bootstrap";

import "./App.scss";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navigation />
        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

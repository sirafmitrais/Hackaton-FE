import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import About from "./views/About";
import Users from "./views/Users";
 import Home from "./views/homepage.page";

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/about" />
              </li>
            </ul>
          </nav>
          <Switch>
          
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/users" exact>
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

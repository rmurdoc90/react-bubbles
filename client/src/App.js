import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/protected' component={BubblePage}/>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

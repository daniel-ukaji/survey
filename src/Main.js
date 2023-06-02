// Main.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import "./index.css";
import LandingPage from "./LandingPage";

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/survey">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;

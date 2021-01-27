import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import {Route, Switch} from "react-router";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
      <Router>
        <div>
            <Switch>
                <Route path="/" exact={true} component={LandingPage}/>
                <Route path="/login" exact={true} component={LoginPage}/>
                <Route path="/register" exact={true} component={RegisterPage}/>
            </Switch>
        </div>
      </Router>
  )
}

export default App;

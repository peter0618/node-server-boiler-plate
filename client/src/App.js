import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import {Route, Switch} from "react-router";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from  './hoc/auth';

function App() {
  return (
      <Router>
        <div>
            <Switch>
                <Route path="/" exact={true} component={Auth(LandingPage, null)}/>
                <Route path="/login" exact={true} component={Auth(LoginPage, false)}/>
                <Route path="/register" exact={true} component={Auth(RegisterPage, false)}/>
            </Switch>
        </div>
      </Router>
  )
}

export default App;

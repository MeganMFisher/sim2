import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from '../components/Auth/Auth';
import Dashboard from '../components/Dashboard/Dashboard';
import Wizard from '../components/Wizard/Wizard';

export default (
  <Switch>
    <Route component={ Auth } path="/" exact />
    <Route component={ Dashboard } path="/dashboard" />
    <Route component={ Wizard } path="/wizard" />
  </Switch>
)
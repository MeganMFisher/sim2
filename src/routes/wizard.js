import React from "react";
import { Switch, Route } from "react-router-dom";

import Step1 from '../components/Wizard/Step1/Step1';
import Step2 from '../components/Wizard/Step2/Step2';
import Step3 from '../components/Wizard/Step3/Step3';
import Step4 from '../components/Wizard/Step4/Step4';
import Step5 from '../components/Wizard/Step5/Step5';

export default (
  <Switch>
    <Route component={ Step1 } path="/wizard/1" />
    <Route component={ Step2 } path="/wizard/2" />
    <Route component={ Step3 } path="/wizard/3" />
    <Route component={ Step4 } path="/wizard/4" />
    <Route component={ Step5 } path="/wizard/5" />
  </Switch>
)
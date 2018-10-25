import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import OperatorMain from '../OperatorMain';
import ParkCar from '../ParkCar';
import ParkCarConteiner from '../ParkCarConteiner';

export default class Operator extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/operatorpark" component={ParkCarConteiner} exact />
          <Route path="/operatorout" component={ParkCar} exact />
          <Route path="/operatorpay" component={ParkCar} exact />
          <Route component={OperatorMain} />
        </Switch>
      </BrowserRouter>
    );
  }
}

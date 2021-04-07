import { Route, Switch } from 'react-router-dom';
import React from 'react';
import LeaderBoard from './Component/LeaderBoard';
import DashBoard from './Component/DashBoard';
import GameBoard from './Component/GameBoard';

export default function Routes() {
  return (
    <Switch>
      <Route exact path={'/'} component={LeaderBoard} />
      <Route exact path={'/dashboard'} component={DashBoard} />
      <Route exact path={'/gameboard'} component={GameBoard} />
    </Switch>
  );
}
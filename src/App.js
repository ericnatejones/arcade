import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar';
import SnakeContainer from './snake/index';
import MineSweeper from './mineSweeper';
import MasterMind from './masterMind';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          home
        </Route>
        <Route path="/snake">
          <SnakeContainer/>
        </Route>
        <Route path="/frogger">
          frogger
        </Route>
        <Route path="/mine-sweeper">
          <MineSweeper/>
        </Route>
        <Route path="/master-mind">
          <MasterMind/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

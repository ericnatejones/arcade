import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar';
import SnakeContainer from './snake/index';
import MineSweeper from './mineSweeper';
import Grid from './snake/Grid'
function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          home
        </Route>
        <Route path="/snake">
          <SnakeContainer grid={<Grid />}/>
        </Route>
        <Route path="/frogger">
          frogger
        </Route>
        <Route path="/mine-sweeper">
          <MineSweeper/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

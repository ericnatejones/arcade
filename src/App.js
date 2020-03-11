import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Snake from './snake/index';
import MineSweeper from './mineSweeper';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          home
        </Route>
        <Route path="/snake">
          <Snake/>
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

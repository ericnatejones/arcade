import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import SnakeContainer from "./snake/index";
import MineSweeper from "./mineSweeper";
import MasterMind from "./masterMind";

// Here's the app component. It's like a table of contents for your whole site. Try not to have a ton of logic here, just use this as a launching point for your code! :)
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          home
        </Route>
        <Route path="/snake">
          <SnakeContainer />
        </Route>
        <Route path="/frogger">frogger</Route>
        <Route path="/mine-sweeper">
          <MineSweeper />
        </Route>
        <Route path="/master-mind">
          <MasterMind />
        </Route>
      </Switch>
    </div>
  );
}

// Nice work!
export default App;

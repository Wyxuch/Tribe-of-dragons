import React from "react";
import { useDispatch } from "react-redux";
import "../style/App.css";
import * as constants from "../constants.js";
import Menu from "./Menu";
import Home from "../containers/Home";
import Conquest from "../containers/Conquest";
import Lair from "../containers/Lair";
import Hunt from "../containers/Hunt";
import Settings from "../containers/Settings";
import { gameTick } from "../actions";

function App() {
  const dispatch = useDispatch();

  setInterval(() => {
    dispatch(gameTick());
  }, 1000);

  return (
    <div className="App" id="app">
      <div id="mainView">
        <Home tab={constants.VisibleTabs.SHOW_HOME} />
        <Lair tab={constants.VisibleTabs.SHOW_LAIR} />
        <Hunt tab={constants.VisibleTabs.SHOW_HUNT} />
        <Conquest tab={constants.VisibleTabs.SHOW_CONQUEST} />
        <Settings tab={constants.VisibleTabs.SHOW_SETTINGS} />
      </div>
      <Menu />
    </div>
  );
}

export default App;

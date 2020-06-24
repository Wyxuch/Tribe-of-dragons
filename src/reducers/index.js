import { combineReducers } from "redux";
import game from "./game.js";
import visibilityTab from "./visibilityTab.js";

export default combineReducers({
  visibilityTab,
  game,
});

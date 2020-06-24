import { VisibleTabs } from "../constants";

const visibilityTab = (state = VisibleTabs.SHOW_HOME, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_TAB":
      return action.tab;
    default:
      return state;
  }
};

export default visibilityTab;

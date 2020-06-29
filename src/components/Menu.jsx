import React from "react";
import "../style/Menu.css";
import MenuButton from "../containers/MenuButton";

import { VisibleTabs } from "../constants";

import icon from "../img/settingsIcon.svg";
// import PropTypes from "prop-types";

const Menu = ({ setTab }) => {
  return (
    <div id="menu">
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_HOME}>
        homeButton
      </MenuButton>
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_LAIR}>
        lairButton
      </MenuButton>
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_HUNT}>
        huntButton
      </MenuButton>
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_CONQUEST}>
        conquestButton
      </MenuButton>
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_SETTINGS}>
        settingsButton
      </MenuButton>
    </div>
  );
};

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default Menu;

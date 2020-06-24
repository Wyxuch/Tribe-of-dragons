import React from "react";
import "../style/Menu.css";
import MenuButton from "../containers/MenuButton";
import { VisibleTabs } from "../constants";
// import PropTypes from "prop-types";

const Menu = ({ setTab }) => {
  return (
    <div id="menu">
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_HOME}>
        Home
      </MenuButton>
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_LAIR}>
        Lair
      </MenuButton>
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_HUNT}>
        Hunt
      </MenuButton>
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_CONQUEST}>
        Conquest
      </MenuButton>
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_SETTINGS}>
        Settings
      </MenuButton>
    </div>
  );
};

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default Menu;

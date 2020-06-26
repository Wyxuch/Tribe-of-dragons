import React from "react";
import "../style/Menu.css";
import MenuButton from "../containers/MenuButton";
import { VisibleTabs } from "../constants";
// import PropTypes from "prop-types";

const Menu = ({ setTab }) => {
  return (
    <div id="menu">
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_HOME}>
        <p>Home</p>
      </MenuButton>
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_LAIR}>
        <p>Lair</p>
      </MenuButton>
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_HUNT}>
        <p>Hunt</p>
      </MenuButton>
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_CONQUEST}>
        <p>Conquest</p>
      </MenuButton>
      <MenuButton onClick={setTab} tab={VisibleTabs.SHOW_SETTINGS}>
        <p>Settings</p>
      </MenuButton>
    </div>
  );
};

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default Menu;

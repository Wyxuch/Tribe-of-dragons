import React from "react";
import PropTypes from "prop-types";

const MenuButton = ({ active, children, setTab }) => (
  <button
    className="menuButton"
    id={children}
    onClick={setTab}
    disabled={active}
  ></button>
);

MenuButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setTab: PropTypes.func.isRequired,
};

export default MenuButton;

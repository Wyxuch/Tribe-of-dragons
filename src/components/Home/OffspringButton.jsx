import React from "react";
// import PropTypes from "prop-types";

const OffspringButton = ({ children, setOffspringAction }) => (
  <button className="offspringButton" onClick={setOffspringAction}>
    {children}
  </button>
);

// MenuButton.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   setTab: PropTypes.func.isRequired,
// };

export default OffspringButton;

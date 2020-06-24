import React from "react";
// import PropTypes from "prop-types";

const Settings = ({ active }) => {
  return (
    <div
      id="settings"
      style={{
        display: active ? "block" : "none",
      }}
    >
      <h1>SETTINGS</h1>
    </div>
  );
};

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default Settings;

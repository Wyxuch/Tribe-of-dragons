import React from "react";
// import PropTypes from "prop-types";

const Lair = ({ active }) => {
  return (
    <div
      id="lair"
      style={{
        display: active ? "block" : "none",
      }}
    >
      <h1>LAIR</h1>
    </div>
  );
};

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default Lair;

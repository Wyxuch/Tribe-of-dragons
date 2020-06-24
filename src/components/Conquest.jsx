import React from "react";
// import PropTypes from "prop-types";

const Conquest = ({ active }) => {
  return (
    <div
      id="conquest"
      style={{
        display: active ? "block" : "none",
      }}
    >
      <h1>CONQUEST</h1>
    </div>
  );
};

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default Conquest;

import React from "react";
// import PropTypes from "prop-types";

const Hunt = ({ active }) => {
  return (
    <div
      id="hunt"
      style={{
        display: active ? "block" : "none",
      }}
    >
      <h1>HUNT</h1>
    </div>
  );
};

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default Hunt;

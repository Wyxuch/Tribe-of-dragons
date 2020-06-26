import React from "react";
// import PropTypes from "prop-types";

const LoadingBar = ({ progress, hatchingTime }) => (
  <div>
    <div>{((progress * 100) / hatchingTime).toFixed()}%</div>
  </div>
);
// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default LoadingBar;

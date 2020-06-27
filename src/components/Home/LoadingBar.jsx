import React from "react";
// import PropTypes from "prop-types";

const LoadingBar = ({ progress, hatchingTime }) => (
  <div>
    <div className="loadingBar">
      {((progress * 100) / hatchingTime).toFixed()}%
      <div
        className="loadingBarBg"
        style={{ width: ((progress * 100) / hatchingTime).toFixed() + "%" }}
      ></div>
    </div>
  </div>
);
// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default LoadingBar;

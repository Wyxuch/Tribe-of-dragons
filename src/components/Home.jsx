import React from "react";
// import PropTypes from "prop-types";

const Home = ({ active }) => {
  return (
    <div
      id="home"
      style={{
        display: active ? "block" : "none",
      }}
    >
      <h1>HOME</h1>
    </div>
  );
};

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default Home;

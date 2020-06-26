import React from "react";
import King from "./King";
import Queen from "./Queen";
import MaleOffspring from "./MaleOffspring";
import FemaleOffspring from "./FemaleOffspring";
import LoadingBar from "../../containers/Home/LoadingBar";
// import PropTypes from "prop-types";

const Home = ({ active }) => {
  return (
    <div
      id="home"
      style={{
        display: active ? "block" : "none",
      }}
    >
      <div className="LRWrapper">
        <div className="LRElement">
          <King />
          <LoadingBar gender={"male"} />
          <MaleOffspring />
        </div>

        <div className="LRElement">
          <Queen />
          <LoadingBar gender={"female"} />
          <FemaleOffspring />
        </div>
      </div>
    </div>
  );
};

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default Home;

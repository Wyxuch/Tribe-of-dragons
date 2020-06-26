import React from "react";
import "../../style/Home.css";
import King from "../../containers/Home/King";
import OffspringList from "../../containers/Home/OffspringList";
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
          <King gender={"male"} />
          <LoadingBar gender={"male"} />
          <OffspringList gender={"male"} />
        </div>

        <div className="LRElement">
          <King gender={"female"} />
          <LoadingBar gender={"female"} />
          <OffspringList gender={"female"} />
        </div>
      </div>
    </div>
  );
};

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default Home;

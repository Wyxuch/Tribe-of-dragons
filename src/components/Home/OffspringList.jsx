import React from "react";
import Offspring from "../../containers/Home/Offspring";

// import PropTypes from "prop-types";

const OffspringList = ({ OffspringList }) => (
  <div>
    {OffspringList.map((offspring, index) => (
      <Offspring key={index} stats={offspring} index={index}></Offspring>
    ))}
  </div>
);

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default OffspringList;

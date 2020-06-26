import React from "react";
// import PropTypes from "prop-types";

const King = ({ name, attack, agility, protection, magic, score }) => (
  <div>
    <div className="mainPicture">
      <p>{name}</p>
    </div>
    <div className="mainStats">
      <p className="score">{score.toFixed(1)}</p>
      <p className="attack">{attack.toFixed(1)}</p>
      <p className="agility">{agility.toFixed(1)}</p>
      <p className="protection">{protection.toFixed(1)}</p>
      <p className="magic">{magic.toFixed(1)}</p>
      <p className="mutations">0</p>
    </div>
  </div>
);

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default King;

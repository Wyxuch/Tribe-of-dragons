import React from "react";
// import PropTypes from "prop-types";

const King = ({ name, attack, agility, protection, magic, score }) => (
  <div className="mainDragon">
    <div className="mainPicture">
      <p>{name}</p>
    </div>
    <div className="mainStats">
      <p className="score stat">{score.toFixed(1)}</p>
      <p className="attack stat">{attack.toFixed(1)}</p>
      <p className="agility stat">{agility.toFixed(1)}</p>
      <p className="protection stat">{protection.toFixed(1)}</p>
      <p className="magic stat">{magic.toFixed(1)}</p>
      <p className="mutations stat">0</p>
    </div>
  </div>
);

// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default King;

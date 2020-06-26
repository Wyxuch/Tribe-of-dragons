import React from "react";
import OffspringButton from "../../containers/Home/OffspringButton";
import { OffspringButtons } from "../../constants";
// import PropTypes from "prop-types";

const Offspring = ({ stats, index, gender }) => (
  <div className="offspring">
    <div className="offspringWrapper">
      <div className="offspringPicture"></div>
      <div className="offspringStats">
        <p className="score">{stats.score.toFixed(1)}</p>
        <p className="attack">{stats.attack.toFixed(1)}</p>
        <p className="agility">{stats.agility.toFixed(1)}</p>
        <p className="protection">{stats.protection.toFixed(1)}</p>
        <p className="magic">{stats.magic.toFixed(1)}</p>
        <p className="mutations">{index}</p>
      </div>
    </div>
    <div className="offspringMenu">
      <OffspringButton
        button={OffspringButtons.OFFSPRING_KILL}
        index={index}
        gender={stats.gender}
      >
        Kill
      </OffspringButton>
      <OffspringButton
        button={OffspringButtons.OFFSPRING_HUNT}
        index={index}
        gender={stats.gender}
      >
        Work
      </OffspringButton>
      <OffspringButton
        button={OffspringButtons.OFFSPRING_WAR}
        index={index}
        gender={stats.gender}
      >
        War
      </OffspringButton>
      <OffspringButton
        button={OffspringButtons.OFFSPRING_PROMOTE}
        index={index}
        gender={stats.gender}
      >
        Promo
      </OffspringButton>
    </div>
  </div>
);
// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default Offspring;

import React from "react";
import OffspringButton from "../../containers/Home/OffspringButton";
import { OffspringButtons } from "../../constants";
// import PropTypes from "prop-types";

const Offspring = ({ stats, index, gender }) => (
  <div className="offspring">
    <div className="offspringWrapper">
      <div className="offspringPicture">
        <p>{stats.name}</p>
      </div>
      <div className="offspringStats">
        <p className="score stat">
          <div className="icon" />
          {stats.score.toFixed(1)}
        </p>
        <p className="attack stat">{stats.attack.toFixed(1)}</p>
        <p className="agility stat">{stats.agility.toFixed(1)}</p>
        <p className="protection stat">{stats.protection.toFixed(1)}</p>
        <p className="magic stat">{stats.magic.toFixed(1)}</p>
        <p className="mutations stat">{index}</p>
      </div>
    </div>
    <div className="offspringMenu">
      <OffspringButton
        button={OffspringButtons.OFFSPRING_KILL}
        index={index}
        gender={stats.gender}
      >
        K
      </OffspringButton>
      <OffspringButton
        button={OffspringButtons.OFFSPRING_HUNT}
        index={index}
        gender={stats.gender}
      >
        W
      </OffspringButton>
      <OffspringButton
        button={OffspringButtons.OFFSPRING_WAR}
        index={index}
        gender={stats.gender}
      >
        C
      </OffspringButton>
      <OffspringButton
        button={OffspringButtons.OFFSPRING_PROMOTE}
        index={index}
        gender={stats.gender}
      >
        P
      </OffspringButton>
    </div>
  </div>
);
// Calc.propTypes = {
//   increment: PropTypes.func.isRequired,
// };

export default Offspring;

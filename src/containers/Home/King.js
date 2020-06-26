import { connect } from "react-redux";
import King from "../../components/Home/King";

const mapStateToProps = (state, ownProps) => {
  if (ownProps.gender === "male") {
    return {
      name: state.game.king.name,
      attack: state.game.king.attack,
      protection: state.game.king.protection,
      agility: state.game.king.agility,
      magic: state.game.king.magic,
      score: state.game.king.score,
    };
  } else {
    return {
      name: state.game.queen.name,
      attack: state.game.queen.attack,
      protection: state.game.queen.protection,
      agility: state.game.queen.agility,
      magic: state.game.queen.magic,
      score: state.game.queen.score,
    };
  }
};

export default connect(mapStateToProps)(King);

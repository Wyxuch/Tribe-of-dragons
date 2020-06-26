import { connect } from "react-redux";
import OffspringList from "../../components/Home/OffspringList";

const mapStateToProps = (state, ownProps) => ({
  OffspringList:
    ownProps.gender === "male"
      ? state.game.maleOffspring
      : state.game.femaleOffspring,
});

export default connect(mapStateToProps)(OffspringList);

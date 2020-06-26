import { connect } from "react-redux";
import LoadingBar from "../../components/Home/LoadingBar";

const mapStateToProps = (state, ownProps) => ({
  progress:
    ownProps.gender === "male"
      ? state.game.nextMaleOffspringCounter
      : state.game.nextFemaleOffspringCounter,
  hatchingTime: state.game.hatchingTime,
});

export default connect(mapStateToProps)(LoadingBar);

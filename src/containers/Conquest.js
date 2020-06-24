import { connect } from "react-redux";
import Conquest from "../components/Conquest";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.tab === state.visibilityTab,
});

export default connect(mapStateToProps)(Conquest);

import { connect } from "react-redux";
import Settings from "../components/Settings";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.tab === state.visibilityTab,
});

export default connect(mapStateToProps)(Settings);

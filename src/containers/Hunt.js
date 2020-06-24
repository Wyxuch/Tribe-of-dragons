import { connect } from "react-redux";
import Hunt from "../components/Hunt";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.tab === state.visibilityTab,
});

export default connect(mapStateToProps)(Hunt);

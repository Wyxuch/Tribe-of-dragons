import { connect } from "react-redux";
import LoadingBar from "../../components/Home/LoadingBar";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.tab === state.visibilityTab,
});

export default connect()(LoadingBar);

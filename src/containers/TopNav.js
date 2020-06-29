import { connect } from "react-redux";
import TopNav from "../components/TopNav";

// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.tab === state.visibilityTab,
// });

export default connect()(TopNav);

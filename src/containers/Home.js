import { connect } from "react-redux";
import Home from "../components/Home/Home";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.tab === state.visibilityTab,
});

export default connect(mapStateToProps)(Home);

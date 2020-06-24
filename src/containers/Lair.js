import { connect } from "react-redux";
import Lair from "../components/Lair";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.tab === state.visibilityTab,
});

export default connect(mapStateToProps)(Lair);

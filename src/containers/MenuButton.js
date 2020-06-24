import { connect } from "react-redux";
import { setVisibilityTab } from "../actions";
import MenuButton from "../components/MenuButton";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.tab === state.visibilityTab,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setTab: () => dispatch(setVisibilityTab(ownProps.tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);

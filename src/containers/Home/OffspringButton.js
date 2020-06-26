import { connect } from "react-redux";
import OffspringButton from "../../components/Home/OffspringButton";
import { offspringAction } from "../../actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
  setOffspringAction: () =>
    dispatch(offspringAction(ownProps.button, ownProps.index, ownProps.gender)),
});

export default connect(null, mapDispatchToProps)(OffspringButton);

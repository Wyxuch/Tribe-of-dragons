import { connect } from "react-redux";
import Offspring from "../../components/Home/Offspring";

const mapStateToProps = (state, ownProps) => {
  return { stats: ownProps.stats, index: ownProps.index };
};

export default connect(mapStateToProps)(Offspring);

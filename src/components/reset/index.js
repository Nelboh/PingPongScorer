import { connect } from "react-redux";
import Reset from "./reset";
import { reset } from "../../data/actions/state";

const mapDispatchToProps = dispatch => {
    return {
        handleReset: () => dispatch(reset()),
    }
}

export default connect(null, mapDispatchToProps)(Reset);
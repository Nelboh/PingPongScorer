import winner from "./winner";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        winnerProps: state.winner
    }
}

export default connect(mapStateToProps)(winner);
import scorecard from "./scorecard";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        winner: state.winner,
        playerProps: state.player2,
        serverProps: !state.p1Serving,
        label: "Player 2",
    }
}

export default connect(mapStateToProps)(scorecard);
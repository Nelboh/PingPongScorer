import scorecard from "./scorecard";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        winner: state.winner,
        playerProps: state.player1,
        serverProps: state.p1Serving,
        label: "Player 1",
    }
}

export default connect(mapStateToProps)(scorecard);
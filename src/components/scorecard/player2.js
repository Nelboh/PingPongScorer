import scorecard from "./scorecard";
import { connect } from "react-redux";
import { p2scores } from "../../data/actions";

const mapStateToProps = (state) => {
    return {
        winner: state.winner,
        playerProps: state.player2,
        serverProps: state.p2Serving,
        label: "Player 2",
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleScore: () => dispatch(p2scores()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(scorecard);
import scorecard from "./scorecard";
import { connect } from "react-redux";
import { patchGame } from "../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        winner: state.complete, // API property name is complete
        playerProps: state.player_1.score,
        serverProps: state.player_1.serving,
        label: state.player_1.name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleScore: () => dispatch(patchGame(1)), // patches info to player 1
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(scorecard);
import scorecard from "./scorecard";
import { connect } from "react-redux";
import { patchGame } from "../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        winner: state.complete, // API property name is complete
        playerProps: state.player_2.score,
        serverProps: state.player_2.serving, // the API knows this is the same as !player1 because magic
        label: state.player_2.name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleScore: () => dispatch(patchGame(2)), // patches info to player 2
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(scorecard);
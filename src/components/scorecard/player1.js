import scorecard from "./scorecard";
import { connect } from "react-redux";
import { p1scores } from "../../data/actions/api";

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
        handleScore: () => dispatch(p1scores()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(scorecard);
import scorecard from "./scorecard";
import { connect } from "react-redux";
import { p1scores } from "../../data/actions";

const mapStateToProps = (state) => {
    return {
        winner: state.winner,
        playerProps: state.player1,
        serverProps: state.p1Serving,
        label: state.player1Name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleScore: () => dispatch(p1scores()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(scorecard);
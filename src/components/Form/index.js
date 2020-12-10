import Form from "./Form";
import { connect } from "react-redux";
import { saveSettings } from "../../data/actions";

const mapStateToProps = (state) => {
    return {

        player1: state.player1,
        player2: state.player2,
        winningScore: state.winningScore,
        alternate: state.alternate,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleStart: (data) => dispatch(saveSettings(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
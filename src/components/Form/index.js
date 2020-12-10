import Form from "./Form";
import { connect } from "react-redux";
import { saveSettings } from "../../data/actions";

const mapStateToProps = (state) => {
    return {

        winningScore: state.winningScore,
        alternate: state.alternate,
        player1Name: state.player1Name,
        player2Name: state.player2Name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleStart: (data) => dispatch(saveSettings(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
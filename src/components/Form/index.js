import Form from "./Form";
import { connect } from "react-redux";
import { postGame } from "../../data/actions/api";

const mapStateToProps = (state) => {
    return {

        winningScore: state.winning_score,
        alternate: state.change_serve,
        player1Name: state.player_1.name,
        player2Name: state.player_2.name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleStart: (data) => dispatch(postGame(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
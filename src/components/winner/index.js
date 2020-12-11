import winner from "./winner";
import { connect } from "react-redux";

// don't worry about how state is connected here, just accept that it is
const mapStateToProps = (state) => {
    return {
        winnerProps: state.complete,
        victorName: state.player_1.won ? state.player_1.name : state.player_2.name,
    }
}

export default connect(mapStateToProps)(winner); // expects instructions on how to access the state and turn it into props (mapStateToProps), then where to transport the data (winner). It does this magically behind the scenes
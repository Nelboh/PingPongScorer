import winner from "./winner";
import { connect } from "react-redux";

// don't worry about how state is connected here, just accept that it is
const mapStateToProps = (state) => {
    return {
        winnerProps: state.winner
    }
}

export default connect(mapStateToProps)(winner); // expects instructions on how to access the state and turn it into props (mapStateToProps), then where to transport the data (winner). It does this magically behind the scenes
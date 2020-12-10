import App from "./App";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        gameStarted: state.gameStarted,
    }
}

export default connect(mapStateToProps)(App); // wraps the component with mapStateToProps
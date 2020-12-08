import Header from "./components/header";
import Reset from "./components/reset";
import Winner from "./components/winner";
import P1scorecard from "./components/scorecard/player1";
import P2scorecard from "./components/scorecard/player2";

const App = ({ player1, player2, handlePlayer1, handlePlayer2, handleReset, p1Serving, winner }) => (
  <>
    {/* header
    <header className="jumbotron mt-4 mb-0">
      <h1>PongPing</h1>
    </header> */}

    <Header />

    <div className="row mb-4" >
      <P1scorecard handlePlayerProps={handlePlayer1} />

      <P2scorecard handlePlayerProps={handlePlayer2} />
    </div>

    {/* scores */}
    {/* <div className="row mb-4">
      <div className="col-md-6 mt-4">
        <div className={p1Serving ? "card text-center bg-dark text-white" : "card text-center"}>
          <h5 className="card-header">Player 1</h5>
          <div className="card-body">
            <p className="card-text display-1">{player1}</p>
          </div>
          <div className="card-footer">
            <button className="form-control btn btn-success" onClick={handlePlayer1}>+</button>
          </div>
        </div>
      </div>

      <div className="col-md-6 mt-4">
        <div className={!p1Serving ? "card text-center bg-dark text-white" : "card text-center"}>
          <h5 className="card-header">Player 2</h5>
          <div className="card-body">
            <p className="card-text display-1">{player2}</p>
          </div>
          <div className="card-footer">
            <button className="form-control btn btn-success" onClick={handlePlayer2}>+</button>
          </div>
        </div>
      </div>
    </div> */}

    { /* FIRST VERSION OF WINNER */}
    {/* <h2 className="alert alert-success" style={{ display: winner === 0 ? "none" : "block" }}>Player {winner} wins!</h2> */}

    { /* SECOND VERSION OF WINNER */}
    {/* <h2 className={winner === 0 ? "d-none" : "alert alert-success"}>Player {winner} wins!</h2> */}

    <Winner />

    <hr />

    <Reset resetProps={handleReset} />


    {/* <button className="btn btn-danger" onClick={handleReset}>Reset</button> */}
  </>
);

export default App;
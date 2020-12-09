import Header from "./components/header";
import Reset from "./components/reset";
import Winner from "./components/winner";
import P1scorecard from "./components/scorecard/player1";
import P2scorecard from "./components/scorecard/player2";

const App = ({ player1, player2, handlePlayer1, handlePlayer2, handleReset, p1Serving, winner }) => (
  <>

    <Header />

    <div className="row mb-4" >
      <P1scorecard handlePlayerProps={handlePlayer1} />

      <P2scorecard handlePlayerProps={handlePlayer2} />
    </div>

    <Winner />

    <hr />

    <Reset resetProps={handleReset} />

  </>
);

export default App;
import Header from "./components/header";
import Reset from "./components/reset";
import Winner from "./components/winner";
import P1scorecard from "./components/scorecard/player1";
import P2scorecard from "./components/scorecard/player2";

const App = () => (
  <>

    <Header />

    <div className="row mb-4" >
      <P1scorecard />

      <P2scorecard />
    </div>

    <Winner />

    <hr />

    <Reset />

  </>
);

export default App;
import Header from "../header";
import Reset from "../reset";
import Winner from "../winner";
import P1scorecard from "../scorecard/player1";
import P2scorecard from "../scorecard/player2";
import Form from "../Form";


const App = ({ gameStarted }) => (
  <>
    <Header />

    {
      !gameStarted ? (
        <Form />
      ) : (
          <>
            <div className="row mb-4" >
              <P1scorecard />

              <P2scorecard />
            </div>

            <Winner />

            <hr />

            <Reset />
          </>
        )
    }
  </>
);

export default App;
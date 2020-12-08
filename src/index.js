import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore } from "redux";
import store from "./data/store";
import { Provider } from "react-redux";

const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          player1={state.player1}
          player2={state.player2}
          p1Serving={state.p1Serving}
          winner={state.winner}
          handlePlayer1={() => store.dispatch({ type: "P1SCORES" })}
          handlePlayer2={() => store.dispatch({ type: "P2SCORES" })}
          handleReset={() => store.dispatch({ type: "RESET" })}

        />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

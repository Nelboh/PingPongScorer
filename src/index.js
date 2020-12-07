import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
  p1Serving: true,
};

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
const server = state => ({ ...state, p1Serving: (state.player1 + state.player2) % 5 === 0 ? !state.p1Serving : state.p1Serving })

let reducer = (state, action) => { // this takes the current state of the app, applies an action to change it, then returns a valid copy of the new state.

  switch (action.type) {

    case "P1SCORES": return server(player1(state));

    case "P2SCORES": return server(player2(state));

    case "RESET": return initial;

    default: return state; // your default returns the state unchanged.
  }
};


const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App
        player1={state.player1}
        player2={state.player2}
        p1Serving={state.p1Serving}
        handlePlayer1={() => store.dispatch({ type: "P1SCORES" })}
        handlePlayer2={() => store.dispatch({ type: "P2SCORES" })}
        handleReset={() => store.dispatch({ type: "RESET" })}

      />
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

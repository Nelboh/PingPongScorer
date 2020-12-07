import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
};

let reducer = (state, action) => { // this takes the current state of the app, applies an action to change it, then returns a valid copy of the new state.

  switch (action.type) {

    case "P1SCORES": return {
      ...state, //the current version of state being passed in	
      player1: state.player1 + 1,
    };

    case "P2SCORES": return {
      ...state,
      player2: state.player2 + 1,
    };

    case "RESET": return initial;

    default: return state; // your default returns the state unchanged.
  }
};


const store = createStore(reducer, initial);

const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App
        player1={state.player1}
        player2={state.player2}
        handlePlayer1={() => store.dispatch({ type: "P1SCORES" })}
        handlePlayer2={() => store.dispatch({ type: "P2SCORES" })
        }
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

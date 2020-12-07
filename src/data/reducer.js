import initial from "./initial";


const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
const server = state => ({ ...state, p1Serving: (state.player1 + state.player2) % 5 === 0 ? !state.p1Serving : state.p1Serving })
const winner = state => {
    if (state.player1 === 21) {
        return {
            ...state,
            winner: 1
        }
    } else if (state.player2 === 21) {
        return {
            ...state,
            winner: 2
        }
    }
    return { ...state, winner: 0 }
}

let reducer = (state, action) => { // this takes the current state of the app, applies an action to change it, then returns a valid copy of the new state.

    switch (action.type) {

        case "P1SCORES": return winner(server(player1(state)));

        case "P2SCORES": return winner(server(player2(state)));

        case "RESET": return initial;

        default: return state; // your default returns the state unchanged.
    }
};

export default reducer;
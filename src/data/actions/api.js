import axios from "../../axios";
import { updateState } from "./state";

export const postGame = (settings) => {
    return (dispatch) => {
        axios.post("/games", {
            player_1: settings.player1,
            player_2: settings.player2,
            winning_score: settings.winningScore,
            change_serve: settings.alternate,

        }).then(({ data }) => {
            dispatch(updateState(data.data))
        })
    }
}

export const patchGame = (playerProps) => {
    return (dispatch, getState) => {
        // returns the id of the created game
        let id = getState().id
        // patches the score to the game with that id every time it updates
        axios.patch(`/games/${id}/score`, {
            player: playerProps,
        }).then(({ data }) => {
            dispatch(updateState(data.data))
        })
    }
}
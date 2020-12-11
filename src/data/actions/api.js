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
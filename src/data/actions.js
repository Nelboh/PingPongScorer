// This is the action creator

export const p1scores = () => {
    return {
        type: "P1SCORES",
    }
}

export const p2scores = () => {
    return {
        type: "P2SCORES",
    }
}

export const reset = () => {
    return {
        type: "RESET",
    }
}

export const saveSettings = ({ player1, player2, winningScore, alternate }) => {

    return {
        type: "SAVE_SETTINGS",
        player1: player1,
        player2: player2,
        winningScore: +winningScore,
        alternate: +alternate,
    }

}

// need to add another action (maybe more than one) for form
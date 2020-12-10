const Winner = ({ winnerProps }) => (
    <h2 className={winnerProps === 0 ? "d-none" : "alert alert-success"}> Player {winnerProps} wins!</h2>
)
export default Winner;

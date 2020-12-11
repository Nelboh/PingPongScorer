const Winner = ({ winnerProps, victorName }) => (
    <h2 className={!winnerProps ? "d-none" : "alert alert-success"}> {victorName} wins!</h2>
)
export default Winner;

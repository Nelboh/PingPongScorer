const Scorecard = ({ playerProps, serverProps, handlePlayerProps, label, winner }) => (


    <div className="col-md-6 mt-4">
        <div className={serverProps ? "card text-center bg-dark text-white" : "card text-center"}>
            <h5 className="card-header">{label}</h5>
            <div className="card-body">
                <p className="card-text display-1">{playerProps}</p>
            </div>
            <div className="card-footer">
                <button disabled={winner === 0 ? false : true} className="form-control btn btn-success" onClick={handlePlayerProps}>+</button>
            </div>
        </div>
    </div>

)

export default Scorecard;

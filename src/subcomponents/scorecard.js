const Scorecard = ({ playerProps, serverProps, handlePlayerProps, label }) => (

    <div className="row mb-4" >
        <div className="col-md-6 mt-4">
            <div className={serverProps ? "card text-center bg-dark text-white" : "card text-center"}>
                <h5 className="card-header">{label}</h5>
                <div className="card-body">
                    <p className="card-text display-1">{playerProps}</p>
                </div>
                <div className="card-footer">
                    <button className="form-control btn btn-success" onClick={handlePlayerProps}>+</button>
                </div>
            </div>
        </div>
    </div>
)

export default Scorecard;

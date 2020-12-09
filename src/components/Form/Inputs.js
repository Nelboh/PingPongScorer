const Inputs = ({ label, handleChange, value, type }) => (
    <div className="form-group">
        <label>{label}</label>
        <input
            type={type}
            className="form-control"
            value={value}
            onChange={handleChange}
        />
    </div>
);

export default Inputs;
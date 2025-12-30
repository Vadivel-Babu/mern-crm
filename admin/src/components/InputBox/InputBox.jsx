import "./Inputbox.css";

const InputBox = ({ label = "", value = "", handleChange, type = "text" }) => {
  return (
    <div className="inputbox">
      <label htmlFor="">{label}</label>
      <br />
      <input
        className="input"
        type={type}
        name={label}
        value={value}
        placeholder={`Enter ${label}`}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputBox;

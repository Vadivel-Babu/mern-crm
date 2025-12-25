import "./inputbox.css";

const InputBox = ({ label = "", value, handleChange }) => {
  return (
    <div className="inputbox">
      <label htmlFor="">{label}</label>
      <br />
      <input
        className="input"
        type="text"
        name="name"
        value={value}
        placeholder="Enter name"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputBox;

import "./checkbox.css";

const Checkbox = ({ checked, onChange }) => {
  return (
    <label className="checkbox__label">
      <input
        className="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        type="checkbox"
        name="checkbox"
        id=""
      />
      <span></span>
    </label>
  );
};

export default Checkbox;

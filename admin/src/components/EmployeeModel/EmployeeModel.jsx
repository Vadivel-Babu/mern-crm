import Closebtn from "../Closebtn/Closebtn";
import "./employeemodel.css";
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";

const EmployeeModel = ({
  title = "Add New Employee",
  close,
  handleChange,
  handleSave,
}) => {
  return (
    <div className="employeemodel">
      <div className="employee__form">
        <div className="employeemodel__header">
          <h1>{title}</h1>
          <Closebtn close={close} />
        </div>
        <InputBox label="first name" value="" handleChange={handleChange} />
        <InputBox label="last name" value="" handleChange={handleChange} />
        <InputBox label="email" value="" handleChange={handleChange} />
        <InputBox label="location" value="" handleChange={handleChange} />
        <InputBox
          label="preferred language"
          value=""
          handleChange={handleChange}
        />
        <div className="employeemodel--button">
          <Button text="save" handleClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeModel;

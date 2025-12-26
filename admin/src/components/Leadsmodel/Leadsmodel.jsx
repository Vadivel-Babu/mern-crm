import Closebtn from "../Closebtn/Closebtn";
import "./leadsmodel.css";
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";

const Leadsmodel = ({ close, handleChange, handleLeadsSave }) => {
  return (
    <div className="leadsmodel">
      <div className="leadsmodel__header">
        <h3>Add New Lead</h3>
        <Closebtn close={close} />
      </div>
      <form className="leadsmodel__form">
        <InputBox label="name" handleChange={handleChange} />
        <InputBox label="email" handleChange={handleChange} />
        <InputBox label="source" handleChange={handleChange} />
        <InputBox label="date" handleChange={handleChange} />
        <InputBox label="location" handleChange={handleChange} />
        <InputBox label="Preferred Language" handleChange={handleChange} />
        <br />
        <Button handleClick={handleLeadsSave} text="Save" />
      </form>
    </div>
  );
};

export default Leadsmodel;

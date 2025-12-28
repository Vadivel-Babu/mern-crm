import Savebtn from "../Savebtn/Savebtn";
import "./date.css";

const Date = () => {
  return (
    <div className="date">
      <div className="date__input">
        <h3>Date</h3>
        <input type="text" placeholder="dd/mm/yy" name="date" id="" />
      </div>
      <div className="date__input">
        <h3>Time</h3>
        <input type="text" placeholder="00:00 am" name="time" id="" />
      </div>
      <Savebtn />
    </div>
  );
};

export default Date;

import "./timingcard.css";
import date from "../../assets/date.svg";

const TimingCard = () => {
  return (
    <div className="timingcard">
      <div>
        <div className="time">
          <p>check in</p>
          <img src={date} alt="" />
        </div>
        <div className="time">
          <p>check out</p>
          <img src={date} alt="" />
        </div>
      </div>
      <button className="checkin--btn"></button>
    </div>
  );
};

export default TimingCard;

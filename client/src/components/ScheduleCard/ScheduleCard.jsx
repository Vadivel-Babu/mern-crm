import "./schedulecard.css";
import location from "../../assets/location.svg";

const ScheduleCard = () => {
  return (
    <div className="schedulecard">
      <div className="schedulecard__header">
        <div className="type">
          <p>Referral</p>
          <p className="phonenumber">949-365-6533</p>
        </div>
        <div className="schedule__date">
          <p>Date</p>
          <p>10/02/2025</p>
        </div>
      </div>
      <div className="schedulecard__leads">
        <div className="location">
          <img src={location} alt="alt" />
          <p>Call</p>
        </div>
        <div className="leads__details">
          <p className="leads__img">J W</p>
          <p>Julie Watson</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;

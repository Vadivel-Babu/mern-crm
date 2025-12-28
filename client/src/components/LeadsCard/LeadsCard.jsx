import "./leadscard.css";
import calendar from "../../assets/calendar.svg";
import edit from "../../assets/edit.svg";
import clock from "../../assets/clock.svg";
import dropdown from "../../assets/dropdown.svg";
import StatusType from "../StatusType/StatusType";
import { useState } from "react";
import Date from "../Date/Date";
import Dropdown from "../Dropdown/Dropdown";

const LeadsCard = () => {
  const [isStatusModel, setStatusModel] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <div className="leadscard">
      <div className="leadscard__left">
        <div className="leadscard__details">
          <h1 className="leads__name">Tanner Finsha</h1>
          <p className="leads__email">@Tannerfisher@gmail.com</p>
        </div>
        <div className="leads__date">
          <img src={calendar} alt="" />
          <p>December 04, 2025</p>
        </div>
      </div>
      <div className="leadscard__right">
        <div className="status">
          <p>ongoing</p>
        </div>
        <div className="leadscard__action">
          <button
            onClick={() => setStatusModel(!isStatusModel)}
            className="leadscard__btn"
          >
            <img src={edit} alt="edit" className="btn__img" />
          </button>
          <button onClick={() => setIsDate(!isDate)} className="leadscard__btn">
            <img src={clock} alt="clock" className="btn__img" />
          </button>
          <button
            onClick={() => setIsDropdown(!isDropdown)}
            className="leadscard__btn"
          >
            <img src={dropdown} alt="dropdown" className="btn__img" />
          </button>
          {isStatusModel && <StatusType />}
          {isDate && <Date />}
          {isDropdown && <Dropdown />}
        </div>
      </div>
    </div>
  );
};

export default LeadsCard;

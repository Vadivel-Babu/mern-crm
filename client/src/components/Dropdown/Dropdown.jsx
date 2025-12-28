import Savebtn from "../Savebtn/Savebtn";
import "./dropdown.css";
import info from "../../assets/info.svg";
import dropdown from "../../assets/graydropdown.svg";
import { useState } from "react";

const Dropdown = ({ style, title, type }) => {
  const [status, setStatus] = useState("ongoing");
  const [isOption, setIsOption] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  return (
    <div style={style} className="dropdown">
      <div className="dropdown__head">
        <h3>Lead Status</h3>
        <img
          onMouseEnter={() => setIsInfo(true)}
          onMouseLeave={() => setIsInfo(false)}
          src={info}
          alt="info"
        />
        {isInfo && <p className="info">Lead cannot be closed if schedule</p>}
      </div>
      <div className="dropdown__select">
        <p>{status}</p>
        <button onClick={() => setIsOption(!isOption)}>
          <img src={dropdown} alt="btn" />
        </button>
      </div>
      {isOption && (
        <div className="dropdown__option">
          <p onClick={() => setStatus("ongoing")} className="option active">
            ongoing
          </p>
          <hr />
          <p onClick={() => setStatus("closed")} className="option">
            closed
          </p>
        </div>
      )}
      <Savebtn />
    </div>
  );
};

export default Dropdown;

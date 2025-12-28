import "./schedulepage.css";
import Searchbox from "../../components/Searchbox/Searchbox";
import filter from "../../assets/filter.svg";
import { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import ScheduleCard from "../../components/ScheduleCard/ScheduleCard";

const SchedulePage = () => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <div className="schedulepage">
      <div className="search__filter--wrapper">
        <Searchbox />
        <button onClick={() => setIsFilter(!isFilter)} className="filter">
          <img src={filter} alt="filter" />
        </button>
        {isFilter && <Dropdown style={{ left: "250px", top: "40px" }} />}
      </div>
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
    </div>
  );
};

export default SchedulePage;

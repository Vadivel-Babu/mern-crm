import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import LeadsTable from "../../components/LeadsTable/LeadsTable";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./leadsPage.css";
import CSVModel from "../../components/CSVmodel/CSVModel";
import Leadsmodel from "../../components/Leadsmodel/Leadsmodel";

const LeadsPage = () => {
  const [isCsvModel, setIsCsvModel] = useState(false);
  const [isLeadsModelOpen, setIsLeadsModelOpen] = useState(false);
  const [leadsData, setLeadsData] = useState({});
  const handleLeadsInput = (e) => {
    setLeadsData({
      ...leadsData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLeadsSave = (e) => {
    e.preventDefault();
    console.log(leadsData);
  };
  return (
    <div className="leads">
      <SearchBox />
      <div className="leads__content">
        <div className="leads__btn">
          <Breadcrumb />
          <div className="leads__btn--wrapper">
            <Button
              text="Add Manually"
              handleClick={() => setIsLeadsModelOpen(true)}
            />
            <Button
              text="Add CSV"
              handleClick={() => setIsCsvModel(!isCsvModel)}
            />
          </div>
        </div>
        <div className="leads__table-content">
          <LeadsTable />
          {isCsvModel && <CSVModel close={() => setIsCsvModel(false)} />}
          {isLeadsModelOpen && (
            <Leadsmodel
              close={() => setIsLeadsModelOpen(false)}
              handleChange={handleLeadsInput}
              handleLeadsSave={handleLeadsSave}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadsPage;

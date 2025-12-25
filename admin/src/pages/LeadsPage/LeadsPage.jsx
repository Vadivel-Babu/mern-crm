import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import LeadsTable from "../../components/LeadsTable/LeadsTable";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./leadsPage.css";
import CSVModel from "../../components/CSVmodel/CSVModel";

const LeadsPage = () => {
  const [isCsvModel, setIsCsvModel] = useState(false);
  return (
    <div className="leads">
      <SearchBox />
      <div className="leads__content">
        <div className="leads__btn">
          <Breadcrumb />
          <div className="leads__btn--wrapper">
            <Button
              text="Add Manually"
              handleClick={() => console.log("leads")}
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
        </div>
      </div>
    </div>
  );
};

export default LeadsPage;

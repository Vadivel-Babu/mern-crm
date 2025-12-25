import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./leadsPage.css";

const LeadsPage = () => {
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
              handleClick={() => console.log("leads csv")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsPage;

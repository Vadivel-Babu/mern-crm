import Searchbox from "../../components/Searchbox/Searchbox";
import LeadsCard from "../../components/LeadsCard/LeadsCard";
import "./leadspage.css";

const LeadsPage = () => {
  return (
    <div className="leadspage">
      <Searchbox change={(e) => console.log(e.target.value)} />
      <div className="cards">
        <LeadsCard />
        <LeadsCard />
      </div>
    </div>
  );
};

export default LeadsPage;

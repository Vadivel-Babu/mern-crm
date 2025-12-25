import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./dashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <SearchBox />
      <Breadcrumb />
    </div>
  );
};

export default DashboardPage;

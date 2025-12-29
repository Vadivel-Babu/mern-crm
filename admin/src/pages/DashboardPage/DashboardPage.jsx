import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./dashboardPage.css";
import unassigned from "../../assets/unassigned.svg";
import profile from "../../assets/profile.svg";
import active from "../../assets/active.svg";
import conversion from "../../assets/conversion.svg";
import Chart from "../../components/Chart/Chart";
import ActiveTable from "../../components/ActiveTable/ActiveTable";

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <SearchBox />
      <div className="dashboard__content">
        <Breadcrumb />
        <div className="dashboard__analytics">
          <div className="stats">
            <div className="card">
              <img src={unassigned} className="card__img" alt="unassigned" />
              <div className="card__title">
                <h1>Unassigned Leads</h1>
                <p>20</p>
              </div>
            </div>
            <div className="card">
              {" "}
              <img src={profile} className="card__img" alt="profile" />
              <div className="card__title">
                <h1>Assigned This Week</h1>
                <p>20</p>
              </div>
            </div>
            <div className="card">
              {" "}
              <img src={active} className="card__img" alt="active" />
              <div className="card__title">
                <h1>Active Salespeople </h1>
                <p>20</p>
              </div>
            </div>
            <div className="card">
              {" "}
              <img src={conversion} className="card__img" alt="conversion" />
              <div className="card__title">
                <h1>Conversion Rate</h1>
                <p>20</p>
              </div>
            </div>
          </div>
          <div class="middle">
            <div class="chart">
              <h1>Sale Analytics</h1>
              <Chart />
            </div>
            <div class="activity">
              <h1>Recent Activity</h1>
              <ul className="activities--list">
                <li>You assigned a lead to Priya – 1 hour ago</li>
                <li>You assigned a lead to Priya – 1 hour ago</li>
                <li>You assigned a lead to Priya – 1 hour ago</li>
                <li>You assigned a lead to Priya – 1 hour ago</li>
                <li>You assigned a lead to Priya – 1 hour ago</li>
                <li>You assigned a lead to Priya – 1 hour ago</li>
                <li>You assigned a lead to Priya – 1 hour ago</li>
                <li>You assigned a lead to Priya – 1 hour ago</li>
              </ul>
            </div>
          </div>
          <ActiveTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

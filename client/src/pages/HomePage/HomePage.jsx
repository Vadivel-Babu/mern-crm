import React from "react";
import "./homepage.css";
import TimingCard from "../../components/TimingCard/TimingCard";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Timings</h1>
      <TimingCard />
      <div className="break">
        <TimingCard />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="break__timing">
            <div className="break__timing--time">
              <div>
                <p>Break</p>
                <p>01.25pm</p>
              </div>
              <div>
                <p>Ended</p>
                <p>01.25pm</p>
              </div>
            </div>
            <div>
              <p>Date</p>
              <p>10/02/2025</p>
            </div>
          </div>
        ))}
      </div>
      <h1>Recent Activity</h1>
      <div className="activities">
        <ul className="activities--list">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <li key={i}>You were assigned 3 more new lead – 1 hour ago</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

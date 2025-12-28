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
      </div>
      <h1>Recent Activity</h1>
    </div>
  );
};

export default HomePage;

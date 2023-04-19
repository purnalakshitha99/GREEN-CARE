import React from "react";
import "./DashboardTabs.css";

const DashboardTabs = () => {
  return (
    <div className="container">
      <div className="tabs">
        <input type="radio" id="radio-1" name="tab-group" value="upcoming" defaultChecked />
        <label className="tab" htmlFor="radio-1">
          Upcoming<span className="notification">2</span>
        </label>
        <input type="radio" id="radio-2" name="tab-group" value="development" />
        <label className="tab" htmlFor="radio-2">
          Development
        </label>
        <input type="radio" id="radio-3" name="tab-group" value="completed" />
        <label className="tab" htmlFor="radio-3">
          Completed
        </label>
        <span className="glider"></span>
      </div>
    </div>
  );
};

export default DashboardTabs;

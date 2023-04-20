import React, { useState } from "react";
import "./DashboardTabs.css";
import TotalRequestsTable from "./TotalRequestTable";

const DashboardTabs = () => {
  const [selectedTab, setSelectedTab] = useState("total");

  const handleTabChange = (event) => {
    setSelectedTab(event.target.value);
  };

  return (
    <div className="containerbox" align = 'center'>
      <div className="tabs">
        <input
          type="radio"
          id="radio-1"
          name="tab-group"
          value="total"
          defaultChecked
          checked={selectedTab === "total"}
          onChange={handleTabChange}
        />
        <label className="tab" htmlFor="radio-1">
          Total
        </label>
        <input
          type="radio"
          id="radio-2"
          name="tab-group"
          value="pending"
          checked={selectedTab === "pending"}
          onChange={handleTabChange}
        />
        <label className="tab" htmlFor="radio-2">
          Pending
        </label>
        <input
          type="radio"
          id="radio-3"
          name="tab-group"
          value="completed"
          checked={selectedTab === "completed"}
          onChange={handleTabChange}
        />
        <label className="tab" htmlFor="radio-3">
          Completed
        </label>
        <span className="glider"></span>
      </div>
      <div className="tab-content">
        {selectedTab === "total" && <TotalRequestsTable />}
      </div>
    </div>
  );
};

export default DashboardTabs;

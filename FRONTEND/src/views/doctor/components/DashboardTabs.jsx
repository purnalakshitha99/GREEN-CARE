import React, { useState } from "react";
import "./DashboardTabs.css";
import RequestsTable from "./RequestTable";
const DashboardTabs = () => {
const [selectedTab, setSelectedTab] = useState("Total");

  return (
    <div className="containerbox" align = 'center'>
      <div className="tabs">
        <input
          type="radio"
          id="radio-1"
          name="tab-group"
          value="Total"
          defaultChecked
          checked={selectedTab === "Total"}
          onClick={()=>{setSelectedTab("Total")}}
        />
        <label className="tab" htmlFor="radio-1">
          Total
        </label>
        <input
          type="radio"
          id="radio-2"
          name="tab-group"
          value="Pending"
          checked={selectedTab === "Pending"}
          onClick={()=>{setSelectedTab("Pending")}}
        />
        
        <label className="tab" htmlFor="radio-2">
          Pending
        </label>
        <input
          type="radio"
          id="radio-3"
          name="tab-group"
          value="Completed"
          checked={selectedTab === "Completed"}
          onClick={()=>{setSelectedTab("Completed")}}
        />
        <label className="tab" htmlFor="radio-3">
          Completed
        </label>
        
        <span className="glider"></span>
      </div>
      <div className="tab-content">
        {<RequestsTable category={selectedTab}/>}
      </div>
    </div>
  );
};

export default DashboardTabs;

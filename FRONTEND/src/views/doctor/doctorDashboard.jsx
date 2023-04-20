import React from "react";
import AppHeader from "../header";
import "./doctorDashboard.css";
import DoctorCards from "./components/DoctorCards";
import DashboardTabs from "./components/DashboardTabs"

const DoctorDashboard = () => {

  return (
    <section>
        <AppHeader />
      <div className="mb-5">
      <DoctorCards/>
      </div>
      <div className="m-5">
      <DashboardTabs/>
      </div>
    
   


    </section>
  );
};

export default DoctorDashboard;

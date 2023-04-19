import React from "react";
import AppHeader from "../header";
import "./doctorDashboard.css";
import DoctorCards from "./components/DoctorCards";
import DashboardTabs from "./components/DashboardTabs"

const DoctorDashboard = () => {

  return (
    <section id="learnMore" className="hero-block">
      <header id="header">
        <AppHeader />
      </header>
    <DoctorCards/>
    <DashboardTabs/>
   


    </section>
  );
};

export default DoctorDashboard;

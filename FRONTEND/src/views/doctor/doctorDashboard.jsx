import React from "react";
import AppHeader from "../header";
import "./doctorDashboard.css";
import DoctorCards from "./components/DoctorCards";

const DoctorDashboard = () => {

  return (
    <section id="learnMore" className="hero-block">
      <header id="header">
        <AppHeader />
      </header>
    <DoctorCards/>
   


    </section>
  );
};

export default DoctorDashboard;

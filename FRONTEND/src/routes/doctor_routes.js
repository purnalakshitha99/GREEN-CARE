import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VetHomePage from "../views/doctor/vetHomePage";
import AnimalForm from '../views/doctor/animalFormView';
import DoctorDashboard from '../views/doctor/doctorDashboard';

export default function doctor_routes() {
  return (
    <Router>
      <Routes>
        <Route path="/VetHomePage" exact element={<VetHomePage />}></Route>
        <Route path="/animalFormView" exact element={<AnimalForm />}></Route>
        <Route path="/doctorDashboard" exact element={<DoctorDashboard />}></Route>
      </Routes>
    </Router>
  );
}
 
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAppointment from "../views/consultant/createAppoinments";
import DisplayAppointment from "../views/consultant/AppointmentList";
import Header from "../views/consultant/Header";
import TestT from "../views/consultant/test";



import Side_nav from "../layouts/side_nav";

export default function consultant_routes() {
  return (
    <Router>
      <Routes>
      
        
        <Route path="/createAppointment" exact element={<CreateAppointment />}></Route>
        <Route path="/displaya" exact element={<DisplayAppointment />}></Route>
        <Route path="/test" exact element={<TestT />}></Route>
        <Route path="/header" exact element={<Header />}></Route>

      
     
       
      </Routes>
    </Router>
  );
}
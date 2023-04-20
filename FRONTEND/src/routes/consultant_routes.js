import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAppointment from "../views/consultant/createAppoinments";
import DisplayAppointment from "../views/consultant/AppointmentList";
import Header from "../views/consultant/Header";
import TestT from "../views/consultant/test";
import NewsAdd from "../views/consultant/AddNews";
import NewsAll from "../views/consultant/News";


export default function consultant_routes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/createAppointment"
          exact
          element={<CreateAppointment />}
        ></Route>
        <Route path="/appolist" exact element={<DisplayAppointment />}></Route>
        <Route path="/test" exact element={<TestT />}></Route>
        <Route path="/newsadd" exact element={<NewsAdd />}></Route>
        <Route path="/news" exact element={<NewsAll />}></Route>
        <Route path="/header" exact element={<Header />}></Route>
        
      </Routes>
    </Router>
  );
}

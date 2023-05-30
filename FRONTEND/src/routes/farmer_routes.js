import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FarmerRegistration from "../views/farmer/FarmerRegistration";
import FarmerProfile from "../views/farmer/FarmerProfile";
import FarmerProfileEdit from "../views/farmer/FarmerProfileUpdate";
import FarmerHome from "../views/farmer/FarmerHome";
import Dashboard from "../views/farmer/FarmerDashboard";
// import Login from "../views/farmer/Login"
import Services from "../views/farmer/FarmerServices"
import ContactForm from '../views/farmer/ContactFieldOfficer'
import ContactDoc from '../views/farmer/ContactDoctor'
import ShowForm from '../views/farmer/ShowContactData'

function farmer_routes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<FarmerHome />}></Route>
          {/* <Route path="/login" exact element={<Login />}></Route> */}
          <Route path="/farmer/signup" exact element={<FarmerRegistration />}></Route>
          <Route path="/farmer/profile" exact element={<FarmerProfile />}></Route>
          <Route path="/farmer/profile/update" exact element={<FarmerProfileEdit />}></Route>
          <Route path="/farmer/dashboard" exact element={<Dashboard />}></Route>
          <Route path="/farmer/services" exact element={<Services />}></Route>
          <Route path="/farmer/services/contactfo" exact element={<ContactForm />}></Route>
          <Route path="/farmer/services/contactdoctor" exact element={<ContactDoc />}></Route>
          <Route path="/farmer/services/viewdetails" exact element={<ShowForm />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default farmer_routes;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FarmerRegistration from "../views/farmer/FarmerRegistration";
import FarmerProfile from "../views/farmer/FarmerProfile";
import FarmerHome from "../views/farmer/FarmerHome";
import Dashboard from "../views/farmer/FarmerDashboard";

function farmer_routes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<FarmerHome />}></Route>
          <Route path="/farmer/signup" exact element={<FarmerRegistration />}></Route>
          <Route path="/farmer/profile" exact element={<FarmerProfile />}></Route>
          <Route path="/farmer/dashboard" exact element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default farmer_routes;

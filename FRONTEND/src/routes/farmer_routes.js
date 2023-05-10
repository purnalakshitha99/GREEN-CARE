import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FarmerRegistration from "../views/farmer/FarmerRegistration";

function farmer_routes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/farmer/signup" exact element={<FarmerRegistration />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default farmer_routes;

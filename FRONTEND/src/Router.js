import React from "react";
import FarmerRoute from "./routes/farmer_routes";
import Login from "./routes/Login";

import Stock_manager_routes from "./routes/stock_manager_routes";
import Consultant_routes from "./routes/consultant_routes"; //consultant

import EmployeeManager_routes from "./routes/employeeManager_routes";

import Fieldvisitor_routes from "./routes/fieldvisitor_routes";


export default function Router() {
  return (
    <div>
      <Consultant_routes />
      <Fieldvisitor_routes /> */}
    dev/lahiru
      <FarmerRoute />
      <Login />

      <EmployeeManager_routes />

    </div>
  );
}

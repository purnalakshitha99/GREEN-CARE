import React from "react";
import Stock_manager_routes from "./routes/stock_manager_routes";
import Consultant_routes from "./routes/consultant_routes"; //consultant
import EmployeeManager_routes from "./routes/employeeManager_routes";

export default function Router() {
  return (
    <div>
      <Stock_manager_routes />


      <Consultant_routes />

      <EmployeeManager_routes />
      

    </div>
  );
}

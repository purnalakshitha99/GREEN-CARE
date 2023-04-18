import React from "react";
import DoctorRoutes from './routes/doctor_routes';
import Stock_manager_routes from "./routes/stock_manager_routes";
import Consultant_routes from "./routes/consultant_routes"; //consultant



export default function Router() {
  return (
    <div>
      <DoctorRoutes />
      <Stock_manager_routes />
      <Consultant_routes/>
      
      
    </div>
  );
}

import React from "react";
import Stock_manager_routes from "./routes/stock_manager_routes";
import Consultant_routes from "./routes/consultant_routes"; //consultant

export default function Router() {
  const role = "admin";
  return (
    <div>
      {role == "stock" && <Stock_manager_routes />}
      {role == "admin" && <Consultant_routes />}
    </div>
  );
}

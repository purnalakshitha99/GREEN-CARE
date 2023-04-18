import React from "react";
import StockManagerRoutes from './routes/stock_manager_routes';
import DoctorRoutes from './routes/doctor_routes';

export default function Router() {
  return (
    <div>
      <StockManagerRoutes />
      <DoctorRoutes />
    </div>
  );
}

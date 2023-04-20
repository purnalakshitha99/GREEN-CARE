import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SalaryForm from "../views/financial_manager/salary";


export default function financial_routes() {
  return (
    <Router>
      <Routes>

        <Route path="/salary" exact element={<SalaryForm />}></Route>

        
      </Routes>
    </Router>
  );
}
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SalaryForm from "../views/financial_manager/add_salary";
import EditSalary from "../views/financial_manager/view_all_salaries";
import UpdateSalary from "../views/financial_manager/view_one_salary";
import FinanceDashboard from "../views/financial_manager/financial_manager_dashboard"


export default function financial_routes() {
  return (
    <Router>
      <Routes>

        <Route path="/add_salary" exact element={<SalaryForm />}></Route>
        <Route path="/edit_salary" exact element={<EditSalary />}></Route>
        <Route path ="/update_salary" exact element = {<UpdateSalary/>}></Route>
        <Route path = "/" exact element = {<FinanceDashboard/>}></Route>
      
      </Routes>
    </Router>
  );
}
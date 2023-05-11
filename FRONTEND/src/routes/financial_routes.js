import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SalaryForm from "../views/financial_manager/add_salary";
import EditSalary from "../views/financial_manager/view_all_salaries";
import finance_Navbar from "../views/financial_manager/finance_Navbar";
// import EditDeleteSalary from "../views/financial_manager/view_specific_salary";
import { ViewOneEmployee as goToUpdate } from "../views/financial_manager/update_salary"


export default function financial_routes() {
  return (
    <Router>
      <Routes>

        <Route path="/" exact element={<SalaryForm />}></Route>
        <Route path="/edit_salary" exact element={<EditSalary />}></Route>
        <Route path = "/finance_Navbar" exact element={<finance_Navbar />}></Route>
        {/* <Route path="/edit_delete" exact element={<EditDeleteSalary />} /> */}
        <Route path ="/update_salary" exact element = {<goToUpdate/>}></Route>
      
      </Routes>
    </Router>
  );
}
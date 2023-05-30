import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DoctorForm from "../views/employee_manager/components/doc_form";
import StaffMemberForm from "../views/employee_manager/components/staff_form";
import ConsultantForm from "../views/employee_manager/components/consultant_form";

import RetrieveEmployee from "../views/employee_manager/components/view_emp";
import UpdataForm from "../views/employee_manager/components/update";

export default function employeeManager_routes() {
  return (
    <Router>
      <Routes>
        <Route path="/doc_form" exact element={<DoctorForm />}></Route>
        <Route path="/view_emp" exact element={<RetrieveEmployee />}></Route>
        <Route path="/staff_form" exact element={<StaffMemberForm />}></Route>
        <Route path="/update/:id" exact element={<UpdataForm />}></Route>
        <Route
          path="/consultant_form"
          exact
          element={<ConsultantForm />}
        ></Route>
      </Routes>
    </Router>
  );
}

import React from "react";
import Home from "../views/feild_visitor/component/Home";
import InsertFarmerInformation from "../views/feild_visitor/component/InsertFarmerInformation";
import InformationTable from "../views/feild_visitor/component/InformationTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FieldReport from "../views/feild_visitor/component/FieldReport";
import { BrowserRouter } from "react-router-dom";
import ReporLlist from "../views/feild_visitor/component/ReporLlist";
import Report from "../views/feild_visitor/component/Report";
import EditRport from "../views/feild_visitor/component/EditRport";
import AjHome from "../views/aj/AjHome";
import DamageReport from "../views/feild_visitor/component/DamageReport";

function fieldvisitor_routes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<AjHome />}></Route>
          <Route path="/visitorhome" exact element={<Home />}></Route>
          <Route path="/infotable" exact element={<InformationTable />}></Route>
          <Route
            path="/fieldinformation"
            exact
            element={<InsertFarmerInformation />}
          ></Route>
          <Route path="/fieldreport" exact element={<FieldReport />}></Route>
          <Route path="/displayreport" exact element={<ReporLlist />}></Route>
          <Route path="/report" exact element={<Report />}></Route>
          <Route path="/damagereport" exact element={<DamageReport />}></Route>
          <Route path="/editreport/:_id" exact element={<EditRport />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default fieldvisitor_routes;

// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// /** import all components */
// import Home from "../views/feild_visitor/component/Home";
// import InsertFarmerInformation from "../views/feild_visitor/component/InsertFarmerInformation";
// import InformationTable from "../views/feild_visitor/component/InformationTable";
// import PageNotFound from "../views/feild_visitor/component/PageNotFound";

// /** root routes */
// const router = createBrowserRouter([
//   {
//     path: "/fieldhome",
//     element: <Home></Home>,
//   },
//   {
//     path: "/farmerinformation",
//     element: <InsertFarmerInformation></InsertFarmerInformation>,
//   },
//   {
//     path: "/infotable",
//     element: <InformationTable></InformationTable>,
//   },

//   {
//     path: "*",
//     element: <PageNotFound></PageNotFound>,
//   },
// ]);

// export default function fieldvisitor() {
//   return (
//     <main>
//       <RouterProvider router={router}></RouterProvider>
//     </main>
//   );
// }

import React from "react";
import Home from "../views/feild_visitor/component/Home";
import InsertFarmerInformation from "../views/feild_visitor/component/InsertFarmerInformation";
import InformationTable from "../views/feild_visitor/component/InformationTable";
import PageNotFound from "../views/feild_visitor/component/PageNotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FieldReport from "../views/feild_visitor/component/FieldReport";
import { BrowserRouter } from "react-router-dom";
import ReporLlist from "../views/feild_visitor/component/ReporLlist";
import Report from "../views/feild_visitor/component/Report";
import EditRport from "../views/feild_visitor/component/EditRport";
import DamageReport from "../views/feild_visitor/component/DamageReport";

function fieldvisitor_routes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
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
          <Route path="*" exact element={<PageNotFound />}></Route>
          <Route path="/editreport/:_id" exact element={<EditRport />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default fieldvisitor_routes;

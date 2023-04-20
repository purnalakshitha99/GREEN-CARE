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
import PageNotFound from "../views/feild_visitor/component/PageNotFound"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function fieldvisitor_routes() {
  return (
    <div>
      
        <Router>
          <Routes>
            <Route path="/fieldhome" exact element={<Home />}></Route>
            <Route path="/infotable" exact element = {<InformationTable />}></Route>
            <Route path="/fieldinformation" exact element={<InsertFarmerInformation />}></Route>
            <Route path="*" exact element={<PageNotFound />}></Route>
          </Routes>
        </Router>
      
    </div>
  );
}

export default fieldvisitor_routes;

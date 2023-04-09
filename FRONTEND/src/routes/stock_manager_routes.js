import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateStocks from "../views/stock_manager/stock/createStocks";
import RetrieveStocks from "../views/stock_manager/stock/retrieveStock";
import Side_nav from "../layouts/side_nav";

export default function stock_manager_routes() {
  return (
    <Router>
      <Routes>
        <Route path="/create" exact element={<CreateStocks />}></Route>
        <Route path="/retrieve" exact element={<RetrieveStocks />}></Route>
      </Routes>
    </Router>
  );
}

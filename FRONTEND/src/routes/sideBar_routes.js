import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "../views/stock_manager/stock/dashBoard";
import Supplier from "../views/stock_manager/suppliers/suppliers";
import Stocks from "../views/stock_manager/stock/stocks";

export default function sideBar_routes() {
  return (
    <Router>
      <Routes>
        <Route path="/dashBoard" exact element={<DashBoard />}></Route>
        <Route path="/stocks" exact element={<Stocks />}></Route>
        <Route path="/supplier" exact element={<Supplier />}></Route>
      </Routes>
    </Router>
  );
}

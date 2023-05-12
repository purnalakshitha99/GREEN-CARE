import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import StockHome from "../views/stock_manager/stock/stockHome";
import CreateStocks from "../views/stock_manager/stock/createStocks";
import RetrieveStock from "../views/stock_manager/stock/retrieveStock";
import "../layouts/sideBar.css";
import Sidebar from "../layouts/sideBar.jsx";
import DashBoard from "../views/stock_manager/stock/dashBoard";
import Suppliers from "../views/stock_manager/suppliers/suppliers";

import ShowItems from "../views/stock_manager/stock/showOne";

export default function stock_manager_routes() {
  return (
    <BrowserRouter>
      
        <Routes>
          {/* <Route path="/" element={<DashBoard />} /> */}
          <Route path="/dashboard" exact element={<DashBoard />}></Route>
          <Route path="/create" exact element={<CreateStocks />}></Route>
          <Route path="/retrieve" exact element={<RetrieveStock />}></Route>
          <Route path="/suppliers" exact element={<Suppliers />}></Route>
          <Route path="/item/:id" exact element={<ShowItems />}></Route>
        </Routes>
      
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import StockHome from "../views/stock_manager/stock/stockHome";
import CreateStocks from "../views/stock_manager/stock/createStocks";
import RetrieveStock from "../views/stock_manager/stock/retrieveStock";
import "../layouts/sideBar.css";
import Sidebar from "../layouts/sideBar.jsx";
import DashBoard from "../views/stock_manager/stock/dashBoard";
// import Suppliers from "../views/stock_manager/stock/suppliers";

import ShowItems from "../views/stock_manager/stock/showOne";
import CreateSupplier from "../views/stock_manager/stock/suppliers";
import RetrieveSupplier from "../views/stock_manager/stock/retrieveSupplier";
import ShowSupplier from "../views/stock_manager/stock/showOneSupplier";

export default function stock_manager_routes() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" exact element={<DashBoard />} />

          <Route
            path="/stock-manager/dashboard"
            exact
            element={<DashBoard />}
          ></Route>
          <Route
            path="/stock-manager/create"
            exact
            element={<CreateStocks />}
          ></Route>
          <Route
            path="/stock-manager/retrieve"
            exact
            element={<RetrieveStock />}
          ></Route>
          {/* <Route path="/suppliers" exact element={<Suppliers />}></Route> */}
          <Route
            path="/stock-manager/item/:id"
            exact
            element={<ShowItems />}
          ></Route>
          <Route
            path="/stock-manager/supplier/:id"
            exact
            element={<ShowSupplier />}
          ></Route>
          <Route
            path="/stock-manager/createSupplier"
            exact
            element={<CreateSupplier />}
          ></Route>
          <Route
            path="/stock-manager/retrieveSupplier"
            exact
            element={<RetrieveSupplier />}
          ></Route>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

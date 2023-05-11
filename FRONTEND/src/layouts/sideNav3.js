import React from "react";
import "../layouts/sideNav3.css";
import CreateStocks from "../views/stock_manager/stock/createStocks";
import DashBoard from "../views/stock_manager/stock/dashBoard";
import { NavLink } from "react-router-dom";
import logo from "../images/logo1.png";

export default function test() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        width="10px sticky-top"
      >
        <div class="container-fluid" width="10px" height="10px">
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav">
              <img src="{logo}" alt="React Image" />

              <div class="nav-item dropdown">
                <div class="dropdown-menu">
                  <a href="#" class="dropdown-item">
                    Inbox
                  </a>
                  <a href="#" class="dropdown-item">
                    Sent
                  </a>
                  <a href="#" class="dropdown-item">
                    Drafts
                  </a>
                </div>
              </div>
            </div>
            <form class="d-flex">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search" />
                <button type="button" class="btn btn-secondary">
                  <i class="bi-search"></i>
                </button>
              </div>
            </form>
            {/* <div class="navbar-nav">
              <a href="#" class="nav-item nav-link">
                Login
              </a>
            </div> */}
          </div>
        </div>
      </nav>

      <div class="sidebar">
        <NavLink
          to="/stock-manager/dashboard"
          className="link"
          activeclassName="active"
        >
          DashBoard
        </NavLink>

        <NavLink
          to="/stock-manager/create"
          className="link"
          activeclassName="active"
        >
          Stock
        </NavLink>
        <NavLink
          to="/stock-manager/createSupplier"
          className="link"
          activeclassName="active"
        >
          Supplier
        </NavLink>
      </div>

      {/* <div class="content">
        <DashBoard />
      </div> */}
    </div>
  );
}

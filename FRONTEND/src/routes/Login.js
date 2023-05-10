import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../views/farmer/Login";

function auth_route() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default auth_route;

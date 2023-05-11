import React, { useState } from "react";
import { FaTh, FaBars, FaUserAlt, FaRegChartBar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/create",
      name: "Stocks",
      icon: <FaUserAlt />,
    },
    {
      path: "/suppliers",
      name: "Supplier",
      icon: <FaRegChartBar />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>
          {/* <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div> */}
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main></main>
    </div>
  );
};

export default Sidebar;

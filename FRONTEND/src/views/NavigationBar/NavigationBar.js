import React from "react";
import { Link } from "react-router-dom";
import logo from './gcl2.png'; // Replace 'logo.jpg' with your actual image file name


function NavigationBar() {
  const navBarStyle = {
    backgroundColor: "#b9dfd7",
    padding: "10px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333333",
    textDecoration: "none",
  };

  const menuStyle = {
    display: "flex",
    listStyleType: "none",
  };

  const itemStyle = {
    marginLeft: "20px",
  };

  const linkStyle = {
    color: "#333333",
    textDecoration: "none",
  };

  const handleLinkHover = (event) => {
    event.target.style.color = "#45a692";
  };

  const handleLinkLeave = (event) => {
    event.target.style.color = "#333333";
  };

  return (
    <nav style={navBarStyle}>
    <div style={containerStyle}>
    <Link to="/" style={logoStyle}>
      <img src={logo} alt="Green Care" />
    </Link>
      <ul style={menuStyle}>
        <li style={itemStyle}>
          <Link
            to="/newsadd"
            style={linkStyle}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Publish News
          </Link>
        </li>
        <li style={itemStyle}>
          <Link
            to="/news"
            style={linkStyle}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            News
          </Link>
        </li>
        <li style={itemStyle}>
          <Link
            to="/appolist"
            style={linkStyle}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Appointment
          </Link>
        </li>
        <li style={itemStyle}>
          <Link
            to="/createAppointment"
            style={linkStyle}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Create Appointment
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  
  );
}

export default NavigationBar;

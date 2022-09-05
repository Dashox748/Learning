import React from "react";
import "./header.css";
import logo from "../../images/destination/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__container">
      <img src={logo} alt="logo" />
      <div className="header__container-list">
        <ul>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <li>00 HOME</li>
          </Link>

          <Link
            to="/destination"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>01 DESTINATION</li>
          </Link>

          <Link to="/crew" style={{ textDecoration: "none", color: "white" }}>
            <li>02 CREW</li>
          </Link>
          <Link
            to="/technology"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>02 TECHNOLOGY</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;

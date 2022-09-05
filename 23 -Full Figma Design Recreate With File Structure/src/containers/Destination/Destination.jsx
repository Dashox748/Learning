import React from "react";
import { Outlet } from "react-router-dom";
import "./destination.css";

function Destination() {
  return (
    <div className="destination__container">
      <h3 className="destination__container-category">
        <span style={{ color: "gray" }}>01 </span> PICK YOUR DESTINATION
      </h3>
      <div className="destination__container-planet">
        <Outlet />
      </div>
    </div>
  );
}

export default Destination;

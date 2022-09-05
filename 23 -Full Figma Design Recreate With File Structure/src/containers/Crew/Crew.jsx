import React from "react";
import { Outlet } from "react-router-dom";
import "./crew.css";

function Crew() {
  return (
    <div className="crew__container">
      <h3 className="crew__container-category">
        <span style={{ color: "gray" }}>02 </span> MEET YOUR CREW
      </h3>
      <div className="crew__container-person">
        <Outlet />
      </div>
    </div>
  );
}

export default Crew;

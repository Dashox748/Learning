import React from "react";
import { Outlet } from "react-router-dom";
import "./technology.css";

function Technology() {
  return (
    <div className="technology__container">
      <h3 className="technology__container-category">
        <span style={{ color: "gray" }}>03 </span> SPACE LAUNCH 101
      </h3>
      <div className="technology__container-vehicle">
        <Outlet />
      </div>
    </div>
  );
}

export default Technology;

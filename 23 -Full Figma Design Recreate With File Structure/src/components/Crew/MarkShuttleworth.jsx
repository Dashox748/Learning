import React from "react";
import Mark from "../../images/crew//persons/mark.png";
import { Link } from "react-router-dom";

function MarkShuttleworth() {
  return (
    <>
      <div className="person_informations">
        <h3>MISSION SPECIALIST </h3>
        <h1>MARK SHUTTLEWORTH</h1>
        <p>
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </p>
        <nav>
          <Link to="/crew/douglas" className="nav-dot"></Link>
          <Link to="/crew/mark" className="nav-dot active"></Link>
          <Link to="/crew/victor" className="nav-dot"></Link>
          <Link to="/crew/anousheh" className="nav-dot"></Link>
        </nav>
      </div>
      <div className="person_image">
        <img src={Mark} />
      </div>
    </>
  );
}

export default MarkShuttleworth;

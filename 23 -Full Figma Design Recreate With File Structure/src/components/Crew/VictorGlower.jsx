import React from "react";
import Victor from "../../images/crew//persons/victor.png";
import { Link } from "react-router-dom";

function VictorGlover() {
  return (
    <>
      <div className="person_informations">
        <h3>PILOT</h3>
        <h1>VICTOR GLOVER</h1>
        <p>
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
        </p>
        <nav>
          <Link to="/crew/douglas" className="nav-dot"></Link>
          <Link to="/crew/mark" className="nav-dot"></Link>
          <Link to="/crew/victor" className="nav-dot active"></Link>
          <Link to="/crew/anousheh" className="nav-dot"></Link>
        </nav>
      </div>
      <div className="person_image">
        <img src={Victor} />
      </div>
    </>
  );
}

export default VictorGlover;

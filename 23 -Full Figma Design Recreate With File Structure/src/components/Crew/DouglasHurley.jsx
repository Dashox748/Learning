import React from "react";
import Douglas from "../../images/crew//persons/douglas.png";
import { Link } from "react-router-dom";

function DouglasHurley() {
  return (
    <>
      <div className="person_informations">
        <h3>COMMANDER</h3>
        <h1>DOUGLAS HULREY</h1>
        <p>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
        <nav>
          <Link to="/crew/douglas" className="nav-dot active"></Link>
          <Link to="/crew/mark" className="nav-dot"></Link>
          <Link to="/crew/victor" className="nav-dot"></Link>
          <Link to="/crew/anousheh" className="nav-dot"></Link>
        </nav>
      </div>
      <div className="person_image">
        <img src={Douglas} />
      </div>
    </>
  );
}

export default DouglasHurley;

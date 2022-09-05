import React from "react";
import Anousheh from "../../images/crew//persons/anousheh.png";
import { Link } from "react-router-dom";

function AnoushehAnsari() {
  return (
    <>
      <div className="person_informations">
        <h3>FLIGHT ENGINNER</h3>
        <h1>ANOUSHEH ANSARI</h1>
        <p>
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </p>
        <nav>
          <Link to="/crew/douglas" className="nav-dot"></Link>
          <Link to="/crew/mark" className="nav-dot"></Link>
          <Link to="/crew/victor" className="nav-dot"></Link>
          <Link to="/crew/anousheh" className="nav-dot active"></Link>
        </nav>
      </div>
      <div className="person_image">
        <img src={Anousheh} />
      </div>
    </>
  );
}

export default AnoushehAnsari;

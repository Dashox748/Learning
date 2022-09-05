import React from "react";
import titan from "../../images/destination/planets/titan.png";
import { Link } from "react-router-dom";

function Moon() {
  return (
    <>
      <div className="planet_image">
        <img src={titan} />
      </div>
      <div className="planet_informations">
        <nav>
          <Link to="/destination/moon" className="planet-planet">
            MOON
          </Link>
          <Link to="/destination/mars" className="planet-planet">
            MARS
          </Link>
          <Link to="/destination/europa" className="planet-planet">
            EUROPA
          </Link>
          <Link to="/destination/titan" className="planet-planet active">
            TITAN
          </Link>
        </nav>
        <h1>TITAN</h1>
        <p>
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <div className="line"></div>
        <div className="planet_distance">
          <div>
            <span className="top">AVG. DISTANCE</span>
            <span className="bottom">1.6 BIL. KM</span>
          </div>
          <div>
            <span className="top">EST. TRAVEL TIME</span>
            <span className="bottom">7 YEARS</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moon;

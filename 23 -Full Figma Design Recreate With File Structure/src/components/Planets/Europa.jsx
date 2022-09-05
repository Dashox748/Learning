import React from "react";
import europa from "../../images/destination/planets/europa.png";
import { Link } from "react-router-dom";

function Moon() {
  return (
    <>
      <div className="planet_image">
        <img src={europa} />
      </div>
      <div className="planet_informations">
        <nav>
          <Link to="/destination/moon" className="planet-planet">
            MOON
          </Link>
          <Link to="/destination/mars" className="planet-planet">
            MARS
          </Link>
          <Link to="/destination/europa" className="planet-planet active">
            EUROPA
          </Link>
          <Link to="/destination/titan" className="planet-planet">
            TITAN
          </Link>
        </nav>
        <h1>EUROPA</h1>
        <p>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <div className="line"></div>
        <div className="planet_distance">
          <div>
            <span className="top">AVG. DISTANCE</span>
            <span className="bottom">628 MIL. KM</span>
          </div>
          <div>
            <span className="top">EST. TRAVEL TIME</span>
            <span className="bottom">3 YEARS</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moon;

import React from "react";
import moon from "../../images/destination/planets/mars.png";
import { Link } from "react-router-dom";

function Moon() {
  return (
    <>
      <div className="planet_image">
        <img src={moon} />
      </div>
      <div className="planet_informations">
        <nav>
          <Link to="/destination/moon" className="planet-planet">
            MOON
          </Link>
          <Link to="/destination/mars" className="planet-planet active">
            MARS
          </Link>
          <Link to="/destination/europa" className="planet-planet">
            EUROPA
          </Link>
          <Link to="/destination/titan" className="planet-planet">
            TITAN
          </Link>
        </nav>
        <h1>MARS</h1>
        <p>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
        <div className="line"></div>
        <div className="planet_distance">
          <div>
            <span className="top">AVG. DISTANCE</span>
            <span className="bottom">225 MIL. KM</span>
          </div>
          <div>
            <span className="top">EST. TRAVEL TIME</span>
            <span className="bottom">9 DAYS</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moon;

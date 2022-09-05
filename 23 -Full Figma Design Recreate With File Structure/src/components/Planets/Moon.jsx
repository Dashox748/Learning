import React from "react";
import moon from "../../images/destination/planets/moon.png";
import { Link } from "react-router-dom";

function Moon() {
  return (
    <>
      <div className="planet_image">
        <img src={moon} />
      </div>
      <div className="planet_informations">
        <nav>
          <Link to="/destination/moon" className="planet-planet active">
            MOON
          </Link>
          <Link to="/destination/mars" className="planet-planet">
            MARS
          </Link>
          <Link to="/destination/europa" className="planet-planet">
            EUROPA
          </Link>
          <Link to="/destination/titan" className="planet-planet">
            TITAN
          </Link>
        </nav>
        <h1>MOON</h1>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className="line"></div>
        <div className="planet_distance">
          <div>
            <span className="top">AVG. DISTANCE</span>
            <span className="bottom">384,400 KM</span>
          </div>
          <div>
            <span className="top">EST. TRAVEL TIME</span>
            <span className="bottom">3 DAYS</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moon;

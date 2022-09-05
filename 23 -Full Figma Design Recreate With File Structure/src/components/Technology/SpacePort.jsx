import React from "react";
import port from "../../images/technology/vehicles/port.jpg";
import { Link } from "react-router-dom";

function SpacePort() {
  return (
    <>
      <nav>
        <Link to="/technology/launch_vehicle" className="vehicle-nav">
          1
        </Link>
        <Link to="/technology/space_port" className="vehicle-nav active">
          2
        </Link>
        <Link to="/technology/space_capsule" className="vehicle-nav">
          3
        </Link>
      </nav>
      <div>
        <h3>THE TERMINOLOGY…</h3>
        <h1>SPACEPORT</h1>
        <p>
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </p>
      </div>
      <div className="vehicle_image">
        <img src={port} />
      </div>
    </>
  );
}

export default SpacePort;

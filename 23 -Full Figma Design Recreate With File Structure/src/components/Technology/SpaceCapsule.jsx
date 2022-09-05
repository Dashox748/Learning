import React from "react";
import Capsule from "../../images/technology/vehicles/capsule.jpg";
import { Link } from "react-router-dom";

function SpaceCapsule({ id }) {
  return (
    <>
      <nav>
        <Link to="/technology/launch_vehicle" className="vehicle-nav">
          1
        </Link>
        <Link to="/technology/space_port" className="vehicle-nav">
          2
        </Link>
        <Link to="/technology/space_capsule" className="vehicle-nav active">
          3
        </Link>
      </nav>
      <div>
        <h3>THE TERMINOLOGY…</h3>
        <h1>SPACE CAPSULE</h1>
        <p>
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      </div>
      <div className="vehicle_image">
        <img src={Capsule} />
      </div>
    </>
  );
}

export default SpaceCapsule;

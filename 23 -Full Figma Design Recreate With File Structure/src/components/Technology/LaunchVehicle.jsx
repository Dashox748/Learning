import React, { useState } from "react";
import launch from "../../images/technology/vehicles/launch.jpg";
import { Link } from "react-router-dom";

function LaunchVehicle() {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav>
        <Link to="/technology/launch_vehicle" className="vehicle-nav active">
          1
        </Link>
        <Link to="/technology/space_port" className="vehicle-nav">
          2
        </Link>
        <Link to="/technology/space_capsule" className="vehicle-nav">
          3
        </Link>
      </nav>
      <div>
        <h3>THE TERMINOLOGY…</h3>
        <h1>LAUNCH VEHICLE</h1>
        <p>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      </div>
      <div className="vehicle_image">
        <img src={launch} />
      </div>
    </>
  );
}

export default LaunchVehicle;

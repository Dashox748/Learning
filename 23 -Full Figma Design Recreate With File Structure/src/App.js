import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./containers/Header/Header";
import Home from "./containers/Home/Home";
import Crew from "./containers/Crew/Crew";
import Technology from "./containers/Technology/Technology";
import Destination from "./containers/Destination/Destination";
import Moon from "./components/Planets/Moon";
import Mars from "./components/Planets/Mars";
import Europa from "./components/Planets/Europa";
import Titan from "./components/Planets/Titan";
import DouglasHurley from "./components/Crew/DouglasHurley";
import MarkShuttleworth from "./components/Crew/MarkShuttleworth";
import VictorGlower from "./components/Crew/VictorGlower";
import AnoushehAnsari from "./components/Crew/AnoushehAnsari";
import LaunchVehicle from "./components/Technology/LaunchVehicle";
import SpaceCapsule from "./components/Technology/SpaceCapsule";
import SpacePort from "./components/Technology/SpacePort";

function App() {
  return (
    <div className="app__container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="destination" element={<Destination />}>
            <Route index element={<Moon />} />
            <Route path="moon" element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>
          <Route path="crew" element={<Crew />}>
            <Route index element={<DouglasHurley />} />
            <Route path="douglas" element={<DouglasHurley />} />
            <Route path="mark" element={<MarkShuttleworth />} />
            <Route path="victor" element={<VictorGlower />} />
            <Route path="anousheh" element={<AnoushehAnsari />} />
          </Route>
          <Route path="technology" element={<Technology />}>
            <Route index element={<LaunchVehicle />} />
            <Route path="launch_vehicle" element={<LaunchVehicle />} />
            <Route path="space_port" element={<SpacePort />} />
            <Route path="space_capsule" element={<SpaceCapsule />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

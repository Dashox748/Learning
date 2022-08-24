import Notifications from "../../images/notifications.png";
import logo from "../../images/logoPlaceholder.png";
import {Link} from "react-router-dom";

import "./Main.css";
import {useState} from "react";
function Main() {
  const [sidebar,setSiteBar] = useState(true);
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../../images/Charts", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="main__container">
      <div className="navbar-desktop">
        <div onClick={()=>{
          setSiteBar(!sidebar);
        }} className="menu">
          menu
        </div>
        <div className="navbar__logo">
          <Link to="/" style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img src={logo} alt="" /></Link>
        </div>
        <div className="navbar__search">
          <input placeholder="Search"></input>
        </div>
        <div className="navbar__user-menu">
          <img src={Notifications} />
          <div className="border"></div>
          <p className="navbar__user-menu-name">Name</p>
        </div>
      </div>
      <div className="main">
        <div className={sidebar ? "main__sidebar" : "main__sidebar-absolute"}>
          <div className="main__sidebar-options">
            <div>Dashboard</div>
            <div>Order</div>
            <div>Account</div>
            <div>Settings</div>
            <p>Support</p>
            <div>Chat</div>
            <div>FAQ</div>
          </div>
          <div className="left-bottom">Light Mode</div>
        </div>
        <div className="main__content">
          <img className="welcome" src={images["promoBox.png"]} alt="" />
          <img src={images["xSmallDataBox.png"]} alt="" />
          <img src={images["xxSmallDataBox.png"]} alt="" />
          <img src={images["xxSmallDataBox-1.png"]} alt="" />
          <img src={images["xxSmallDataBox-2.png"]} alt="" />
          <img className="welcome" src={images["xLargeDataBox.png"]} alt="" />
          <img src={images["mediumDataBox.png"]} alt="" />

        </div>
      </div>
    </div>
  );
}

export default Main;

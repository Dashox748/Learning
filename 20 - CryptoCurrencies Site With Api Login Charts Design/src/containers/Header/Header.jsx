import "./header.css";
import Logo from "../../data/img/Logo.png";
import Search from "../../data/img/search.png";
import Notification from "../../data/img/bell.png";

function Header() {
  return (
    <div className="header__container">
      <div className="header__container-center">
        <div className="header__container-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="header__container-welcome">
          <h1>Welcome Back, Marci</h1>
          <p>Here is the information about all your orders </p>
        </div>
        <div className="header__container-user">
          <div className="header__container-user-align">
            <img src={Search} alt="search" />
            <img src={Notification} alt="search" />
            <div className="profile_picture"></div>
            <h3>Marci Fumons</h3>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

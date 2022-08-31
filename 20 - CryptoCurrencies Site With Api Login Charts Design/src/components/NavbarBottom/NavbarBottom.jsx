import "./navbarBottom.css";
import Help from "../../data/img/info.png";
import Contact from "../../data/img/chat.png";
import Logout from "../../data/img/logout.png";
function NavbarBottom() {
  return (
    <div className="navbar-bottom__container">
      <ul className="noselect">
        <li>
          <img src={Help} alt="Help" /> <span>Help Centre</span>
        </li>
        <li>
          <img src={Contact} alt="Contact" /> <span>Contact us</span>
        </li>
        <li >
          <img src={Logout} alt="Logout" /> <span>Log out</span>
        </li>
      </ul>
    </div>
  );
}

export default NavbarBottom;

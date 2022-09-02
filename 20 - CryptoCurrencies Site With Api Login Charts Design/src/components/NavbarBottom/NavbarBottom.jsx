import "./navbarBottom.css";
import Help from "../../data/img/info.png";
import Contact from "../../data/img/chat.png";
import Logout from "../../data/img/logout.png";
import {useAuth0} from "@auth0/auth0-react";
function NavbarBottom() {
  const {logout,isAuthenticated} = useAuth0()
  return (
    <div className="navbar-bottom__container">
      <ul className="noselect">
        <li>
          <img src={Help} alt="Help" /> <span>Help Centre</span>
        </li>
        <li>
          <img src={Contact} alt="Contact" /> <span>Contact us</span>
        </li>
        {isAuthenticated?<li>

          <img src={Logout} alt="Logout" /> <span style={{color:"red"}} onClick={()=>logout()}>Log out</span>
        </li>:null}

      </ul>
    </div>
  );
}

export default NavbarBottom;

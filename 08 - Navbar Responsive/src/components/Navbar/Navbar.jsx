import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleHamburgerMenu = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="navbar__container">
      <h1 className="navbar__container-logo">React</h1>
      <div className="hamburger-menu" onClick={handleHamburgerMenu}>
        {clicked ?  <AiOutlineClose />: <GiHamburgerMenu />}
      </div>
      <ul className={clicked ? "nav-menu active": "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
        <button>Sign Up</button>
    </nav>
  );
}

export default Navbar;

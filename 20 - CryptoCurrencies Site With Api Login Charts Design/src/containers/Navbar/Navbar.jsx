import "./navbar.css";
import Navbar_bottom from "../../components/NavbarBottom/NavbarBottom";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
function Navbar({ changeCrypto, findCrypto }) {
  return (
    <div className="navbar__container">
      <NavbarTop changeCrypto={changeCrypto} findCrypto={findCrypto} />

      <Navbar_bottom />
    </div>
  );
}

export default Navbar;

import "./navbar.css";
import Navbar_bottom from "../../components/NavbarBottom/NavbarBottom";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
function Navbar({changeCrypto}) {
  return (
    <div className="navbar__container">

        <NavbarTop changeCrypto={changeCrypto}/>

        <Navbar_bottom />

    </div>
  );
}

export default Navbar;

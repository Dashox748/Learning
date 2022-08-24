import './navbar.css'
import {useState} from "react";
function Navbar() {
    const [hamburger,setHamburger] = useState(false)
  return (
    <nav>
      <div>Logo</div>
      <div className="items">
        <ul className={hamburger ? "active" : null}>
          <li>Home</li>
          <li>Products</li>
          <li>Sites</li>
          <li>Contact</li>
        </ul>
      </div>
        <div>
            <h1 onClick={()=>{
                setHamburger(!hamburger)
            }}>{!hamburger ? <p>Menu</p> : <p>X</p>} </h1>
        </div>
    </nav>
  );
}

export default Navbar;

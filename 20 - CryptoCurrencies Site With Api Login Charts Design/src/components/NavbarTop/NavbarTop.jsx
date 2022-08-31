import "./navbarTop.css";
import Overview from "../../data/img/chart.png";
import Product from "../../data/img/case.png";
import User from "../../data/img/user.png";
import Checkout from "../../data/img/checkout.png";
import Setting from "../../data/img/settings.png";
import Arrow from "../../data/img/chevron-down.png";
import { useState } from "react";

function NavbarTop({changeCrypto}) {
  const [productClicked, setProductClicked] = useState(false);
  const [orderClicked, setOrderClicked] = useState(false);
  return (
    <div className="navbar-top__container">
      <ul className="noselect">
        <div className="navbar-top__container-overview">
          <img src={Overview} alt="Overview" /> Overview
        </div>
        <li
          onClick={() => {
            setProductClicked(!productClicked);
          }}
        style={productClicked?{color:"black",background:"#e7e7e7"}: null}>
          <img src={Product} alt="Product" /> <span>CryptoCurrencies</span>
          <img src={Arrow} alt="expand Product" />
        </li>
        {productClicked ? (
          <div className="expand_menu">
            <p onClick={() => changeCrypto("bitcoin")} >Bitcoin</p>
            <p onClick={() => changeCrypto("ethereum")}>Ethereum</p>
            <p onClick={() => changeCrypto("tether")}>Tether</p>
          </div>
        ) : null}

        <li
          onClick={() => {
            setOrderClicked(!orderClicked);
          }}
          style={orderClicked?{color:"black",background:"#e7e7e7"}: null}
        >
          <img src={User} alt="User" /> <span>Orders</span>
          <img src={Arrow} alt="expand Orders" />
        </li>
        {orderClicked ? (
          <div className="expand_menu">
            <p>siema</p>
            <p>nara</p>
            <p>xddddddddddddd</p>
          </div>
        ) : null}
        <li>
          <img src={Checkout} alt="Checkout" /> Checkout
        </li>
        <li>
          <img src={Setting} alt="Setting" /> Setting
        </li>
      </ul>
    </div>
  );
}

export default NavbarTop;

import "./navbarTop.css";
import Overview from "../../data/img/chart.png";
import Product from "../../data/img/case.png";
import User from "../../data/img/user.png";
import Checkout from "../../data/img/checkout.png";
import Setting from "../../data/img/settings.png";
import Arrow from "../../data/img/chevron-down.png";
import { useState } from "react";

function NavbarTop({ changeCrypto, findCrypto }) {
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
          style={
            productClicked ? { color: "black", background: "#e7e7e7" } : null
          }
        >
          <img src={Product} alt="Product" /> <span>Most Popular</span>
          <img src={Arrow} alt="expand Product" />
        </li>
        {productClicked ? (
          <div className="expand_menu">
            <p
              onClick={() => {
                changeCrypto("bitcoin");
                findCrypto("", "offsearch");
              }}
            >
              Bitcoin
            </p>
            <p
              onClick={() => {
                changeCrypto("ethereum");
                findCrypto("", "offsearch");
              }}
            >
              Ethereum
            </p>
            <p
              onClick={() => {
                changeCrypto("tether");
                findCrypto("", "offsearch");
              }}
            >
              Tether
            </p>
          </div>
        ) : null}

        <li
          onClick={() => {
            setOrderClicked(!orderClicked);
          }}
          style={
            orderClicked ? { color: "black", background: "#e7e7e7" } : null
          }
        >
          <img src={User} alt="User" /> <span>Favourite</span>
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
          <img src={Checkout} alt="Checkout" /> Trending
        </li>
        <li>
          <img src={Setting} alt="Setting" /> Setting
        </li>
      </ul>
    </div>
  );
}

export default NavbarTop;

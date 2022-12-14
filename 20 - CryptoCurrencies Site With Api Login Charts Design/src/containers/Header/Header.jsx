import "./header.css";
import Logo from "../../data/img/Logo.png";
import Search from "../../data/img/search.png";
import Notification from "../../data/img/bell.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function Header({ findCrypto }) {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (searchInput.length === 0) return;
    findCrypto(searchInput, "onsearch");
    setSearchInput("");
  };
  return (
    <div className="header__container">
      <div className="header__container-center">
        <div className="header__container-logo">
          <img src={Logo} alt="Logo" />
        </div>
        {isAuthenticated ? (
          <div className="header__container-welcome">
            <h1>Welcome Back {user.given_name}</h1>
            <p>Here is the information about all currencies </p>
          </div>
        ) : (
          <div className="header__container-welcome">
            <h1>Welcome </h1>
            <p>
              Here is the information about all crypto currencies, Login to get
              more options{" "}
            </p>
          </div>
        )}

        <div className="header__container-user">
          {isAuthenticated ? (
            <div className="header__container-user-align">
              <div>
                <img src={Notification} alt="search" />
                <img
                  className="profile_picture"
                  src={user.picture}
                  alt="profile_picture"
                />
                <h3>{user.name}</h3>
              </div>
              <div className="search-bar__container">
                <form onSubmit={onSearch}>
                  <input
                    value={searchInput}
                    onChange={(event) => handleSearchInput(event)}
                    placeholder="Find Crypto"
                  />
                </form>
                <img src={Search} alt="search" />
              </div>
            </div>
          ) : (
            <div
              style={{ height: "60px" }}
              className="header__container-user-align"
            >
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

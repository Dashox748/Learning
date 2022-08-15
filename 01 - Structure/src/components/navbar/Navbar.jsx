import "./navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt__navbar_links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wig">What is GPT?</a>
          </p>
          <p>
            <a href="#oa">Open AI</a>
          </p>
          <p>
            <a href="#cs">Case Studies</a>
          </p>
          <p>
            <a href="#library">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>
          <a href="#login">Sign in</a>
        </p>
        <button className="gpt__navbar_sign_up_button">Sign up</button>
      </div>
    </div>
  );
};
export default Navbar;

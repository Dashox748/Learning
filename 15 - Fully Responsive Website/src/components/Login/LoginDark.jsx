import "./loginDark.css";
import logo from "../../images/logoPlaceholder.png";
import keyIllustration from "../../images/keyIllustration.png"
import {Link} from "react-router-dom";

function LoginDark() {
  return (
    <div className="login__container">
      <div className="left-top">
        <img src={logo} alt="x" />
      </div>
      <div className="form__container">
          <div className="form__container-content">
              <div>
                  <form onSubmit={(event)=>{
                      event.preventDefault()
                  }}>
                      <input/>
                      <input/>
                      <input className="checkboxx" type="checkbox"/>
                      <Link to="/Main" className="link_button"> <button> Log In  </button></Link>

                  </form>
              </div>
              <div>
                  <img src={keyIllustration} alt=""/>
              </div>
          </div>

      </div>
      <div className="left-bottom">Light Mode</div>
    </div>
  );
}

export default LoginDark;

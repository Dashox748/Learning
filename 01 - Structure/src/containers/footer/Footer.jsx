import "./footer.css";
import logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className="footer__container section_padding">
      <div className="footer__container-heading">
          <h1>Do you want to step in to the future before others</h1>
          <button>Request Early Acces </button>
      </div>
      <div>
        <div className="footer__container_credits">
            <div className="footer__container_credits-logo">
                <img src={logo} alt="logo_with_rights"/>
                <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>
            <div className="feature__container_credits-links">
                <h5>Links</h5>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className="feature__container_credits-company">
                <h5>Company</h5>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="feature__container_credits-touch">
            <h5>Get in touch</h5>
                <p>Crechterwoord K12 182 DK Alknjkcb</p>
                <p>085-132567</p>
                <p>info@payme.net</p>
            </div>
        </div>
      </div>
        <div className="footer__container_rights">
            <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
    </div>
  );
};
export default Footer;

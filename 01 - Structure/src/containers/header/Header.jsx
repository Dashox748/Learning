import "./header.css";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";

const Header = () => {
  return (
    <div className="gpt__header section_padding" id="home">
      <div className="gpt__header_left_side">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt__header_left_side_login">
            <input type="email" placeholder="Your Email Addres"/>
            <button>Get Started</button>
        </div>
          <div className="gpt__header_left_side_visited">
              <img src={people} alt="people"/>
              <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
      </div>
      <div className="gpt__header_right_side">
          <img src={ai} alt="ai" />
      </div>
    </div>
  );
};
export default Header;

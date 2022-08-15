import "./features.css";
import Feature from "../../components/feature/Feature";

const Features = () => {
  return (
    <div className="features__container section_padding" id="cs">
      <div className="feature__container-heading">
        <h1 className="x">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="feature__container-ft">
        <Feature
          title="Improving end distrusts instantly "
          text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
        ></Feature>
          <Feature
          title="Become the tended active"
          text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
        ></Feature>
          <Feature
          title="Message or am nothing"
          text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
        ></Feature>
          <Feature
          title="Really boy law county"
          text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
        ></Feature>
      </div>
    </div>
  );
};
export default Features;

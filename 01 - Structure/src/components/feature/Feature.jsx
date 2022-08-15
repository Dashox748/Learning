import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="feature__container">
      <div className="feature__container_title">
        <div />
        <h1> {title}</h1>
      </div>
      <div className="feature__container_text">
        <p>{text}</p>
      </div>
    </div>
  );
};
export default Feature;

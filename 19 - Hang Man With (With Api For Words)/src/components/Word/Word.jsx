import "./word.css";
function Word({ word, correctLetters }) {

  return (
    <div className="word__container">
      {word.split("").map((letter, index) => (
        <span key={index}>{correctLetters.includes(letter) ?  letter  : ''}</span>
      ))}
    </div>
  );
}

export default Word;

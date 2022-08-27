import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Figure from "./components/Figure/Figure";
import WrongLetters from "./components/WrongLetters/WrongLetters";
import Word from "./components/Word/Word";
import Notification from "./components/Notification/Notification";
import Win from "./components/Win/Win";

function App() {
  const [word, setWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [reset, setReset] = useState(false);
  const [errors, setErrors] = useState(0);
  const [notification, setNotification] = useState(false);
  const [checkWin, setCheckWin] = useState("");
  const [lengthOfWord, setLengthOfWord] = useState(0);
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((response) => response.json())
      .then((data) => {
        setLengthOfWord(new Set(data.toString().split("")).size);
        setWord(data.toString());
      });
  }, [reset]);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (!(event.keyCode >= 65 && event.keyCode <= 90)) {
        return;
      }
      const letter = event.key;

      if (wrongLetters.includes(letter) || correctLetters.includes(letter)) {
        setNotification(!notification);
        setTimeout(() => setNotification(notification), 1800);
      } else if (word.includes(letter) && !correctLetters.includes(letter)) {
        setCorrectLetters([...correctLetters, letter]);

        if (lengthOfWord === correctLetters.length + 1) {
          setCheckWin("won");
        }
      } else if (!word.includes(letter) && !wrongLetters.includes(letter)) {
        setWrongLetters([...wrongLetters, letter]);
        setErrors(errors + 1);
        if (errors > 4) {
          setCheckWin("lost");
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, word]);

  const resetGame = () => {
    setCheckWin("");
    setCorrectLetters([]);
    setWrongLetters([]);
    setErrors(0);
    setReset(!reset);
  };
  return (
    <div className="hangMan__container">
      <Header />
      <div className="hangMan__container-middle">
        <Figure errors={errors} />
        <WrongLetters wrongLetters={wrongLetters} />
      </div>
      <Word word={word} correctLetters={correctLetters} />
      <Notification alert={notification} />
      <Win
        checkWin={checkWin}
        word={word}
        errors={errors}
        resetGame={resetGame}
      />
    </div>
  );
}

export default App;

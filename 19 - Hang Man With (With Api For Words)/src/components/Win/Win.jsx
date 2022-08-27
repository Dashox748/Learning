import "./win.css";

function Win({ checkWin, word, errors, resetGame }) {
  return (
    <>
      {checkWin !== "won" || checkWin !== "lost" ? (
        <div>
          {checkWin === "won" ? (
            <div className="won__container">
              <h1>Wygrales kurwaaa</h1>
              <button onClick={() => resetGame()}>Reset Game</button>
            </div>
          ) : null}
          {checkWin === "lost" ? (
            <div className="won__container">
              <h1>You Lost</h1>
              <span>Correct Word: {word}</span>
              <button onClick={() => resetGame()}>Reset Game</button>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default Win;

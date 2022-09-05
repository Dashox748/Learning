import React from "react";
import "./gameContainer.css";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import rock from "../../images/icon-rock.svg";

function GameContainer({
  showResult,
  whatPick,
  choice,
  winner,
  reset,
  botPick,
}) {
  const botActive = `${botPick} active`;
  const playerActive = `${choice} active`;
  let img = "";
  if (choice === "paper") {
    img = <img src={paper} alt={choice} />;
  } else if (choice === "rock") {
    img = <img src={rock} alt={choice} />;
  } else if (choice === "scissors") {
    img = <img src={scissors} alt={choice} />;
  }
  let botImg = "";
  if (botPick === "paper") {
    botImg = <img src={paper} alt={botPick} />;
  } else if (botPick === "rock") {
    botImg = <img src={rock} alt={botPick} />;
  } else if (botPick === "scissors") {
    botImg = <img src={scissors} alt={botPick} />;
  }
  return (
    <>
      {!showResult ? (
        <div className="game__container">
          <div style={{ display: "flex", gap: "5rem" }}>
            <div className="paper" onClick={() => whatPick("paper")}>
              <img src={paper} alt="paper" />
            </div>
            <div className="scissors" onClick={() => whatPick("scissors")}>
              <img src={scissors} alt="scissors" />
            </div>
          </div>
          <div className="rock" onClick={() => whatPick("rock")}>
            <img src={rock} alt="scissors" />
          </div>

          {/* Traingle Absolute only for design */}
          <div className="triangle">
            <div className="top_line"></div>
            <div
              style={{
                display: "flex",
                marginTop: "10rem",
                justifyContent: "center",
              }}
            >
              <div className="left_line"></div>
              <div className="right_line"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="game__container game__container_results">
          <div className="show_result-div">
            <h1>YOU PICKED</h1>
            <div className={winner === "YOU WON" ? playerActive : choice}>
              {img}
            </div>
          </div>
          <div className="notification__container">
            <h5>{winner}</h5>
            <button onClick={() => reset()}>PLAY AGAIN</button>
          </div>

          <div className="show_result-div">
            <h1>THE HOUSE PICKED</h1>
            <div className={winner === "YOU LOSE" ? botActive : botPick}>
              {botImg}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GameContainer;

import React from "react";
import "./header.css";

function Header({ score }) {
  return (
    <div className="header__container">
      <div className="header__container-name">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>
      <div className="header__container-score">
        <h3>Score</h3>
        <h1>{score}</h1>
      </div>
    </div>
  );
}

export default Header;

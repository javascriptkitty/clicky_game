import React from "react";
import "./style.css";

const Header = props => {
  return (
    <header className="header">
      <div className="logo">Clicky game</div>
      <div className="message">{props.message}</div>
      <div className="scores">
        Score: {props.score}| Top score: {props.topScore}
      </div>
    </header>
  );
};

export default Header;

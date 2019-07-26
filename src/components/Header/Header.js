import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Clicky game</div>
      <div className="info">???className</div>
      <div className="scores">Score: | Top score: </div>
    </header>
  );
}

export default Header;

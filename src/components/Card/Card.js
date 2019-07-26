import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.link} />
    </div>
  );
}

export default Card;

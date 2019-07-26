import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div>
      <img src={props.link} />
    </div>
  );
}

export default Card;

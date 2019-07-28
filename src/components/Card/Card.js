import React from "react";
import "./style.css";

const Card = props => {
  const clickHandler = () => props.onClick(props.id);

  return (
    <div className="card" onClick={clickHandler}>
      <img src={props.link} />
    </div>
  );
};

export default Card;

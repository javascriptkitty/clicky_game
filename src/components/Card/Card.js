import React from "react";
import "./style.css";

const Card = props => {
  const handleOnClick = () => props.onClick(props.id);

  return (
    <div className="card" onClick={handleOnClick}>
      <img src={props.link} />
    </div>
  );
};

export default Card;

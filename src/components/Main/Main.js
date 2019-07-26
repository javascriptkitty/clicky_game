import React, { Component } from "react";
import "./style.css";
import pictures from "./pics.json";
import Card from "../Card/Card";

class Main extends Component {
  state = {
    pictures
  };

  render() {
    return (
      <div className="container">
        {this.state.pictures.map(picture => (
          <Card
            id={pictures.id}
            link={pictures.id}
            data-value="pick"
            // onClick =
          />
        ))}
      </div>
    );
  }
}

export default Main;

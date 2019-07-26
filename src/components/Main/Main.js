import React, { Component } from "react";
import "./style.css";
import pictures from "./pics.json";
import Card from "../Card/Card";

class Main extends Component {
  state = {
    pictures
  };

  //mixCards = id => {};
  render() {
    return (
      <div className="container">
        {this.state.pictures.map(picture => (
          <Card
            id={picture.id}
            link={picture.link}
            data-value="pick"
            //onClick={this.mixCards}
          />
        ))}
      </div>
    );
  }
}

export default Main;

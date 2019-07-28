import React, { Component } from "react";
import "./style.css";
import pictures from "./pics.json";

import Card from "../Card/Card";

class Main extends Component {
  state = {
    pictures
  };

  handleOnClick = cardId => {
    debugger;

    let pictures = this.state.pictures.sort(function() {
      return 0.5 - Math.random();
    });

    this.props.onClickCard(cardId);
    this.setState({ pictures });
  };

  render() {
    return (
      <div className="container">
        {this.state.pictures.map(picture => (
          <Card
            id={picture.id}
            link={picture.link}
            onClick={this.handleOnClick}
          />
        ))}
      </div>
    );
  }
}

export default Main;

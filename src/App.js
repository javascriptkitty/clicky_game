import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Hero from "./components/Hero/Hero";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.includes(id)) {
      this.setState({
        score: 0,
        topScore:
          this.state.topScore > this.state.score
            ? this.state.topScore
            : this.state.score,
        message: "You guessed incorrectly!",
        clicked: []
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        topScore: this.state.topScore,
        message: "You guessed correctly!",
        clicked: this.state.clicked.concat(id)
      });
    }
    this.state.clicked.push(id);
    console.log(this.state.clicked);
  };
  render() {
    return (
      <div className="App">
        <Header
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Hero />
        <Main onClickCard={this.handleClick} />
      </div>
    );
  }
}
export default App;

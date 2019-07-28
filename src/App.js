import React, { Component } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

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
        message: "Click an image to begin!",
        clicked: []
      });
    } else {
    }
    this.state.clicked.push(id);
    console.log(this.state.clicked);
  };
  render() {
    return (
      <div className="App">
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Hero />
        <Main onClickCard={this.handleClick} />
        <Footer />
      </div>
    );
  }
}
export default App;

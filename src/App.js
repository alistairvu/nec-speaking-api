import React, { Component } from "react";
import IntroText from "./IntroText";
import Question from "./Question";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generated: false,
      question: "",
      id: "",
      allQuestions: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://api.sheety.co/a65b4af56baaa41a8d3611eb286a3cc1/necSpeakingQuestions/sheet1"
    )
      .then((response) => response.json())
      .then((response) => {
        const { sheet1 } = response;
        this.setState({ allQuestions: sheet1 });
      });
  }

  handleClick(event) {
    event.preventDefault();
    const randInt = Math.floor(Math.random() * this.state.allQuestions.length);
    const randQuestion = this.state.allQuestions[randInt].question;
    const randId = this.state.allQuestions[randInt].id;
    this.setState({
      generated: true,
      question: randQuestion,
      id: randId,
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-primary text-center">NEC Speaking Prep</h1>
        <IntroText />
        <div className="d-flex justify-content-center">
          <button
            disabled={this.state.generated}
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Generate prompt
          </button>
        </div>
        {this.state.generated ? (
          <Question id={this.state.id} question={this.state.question} />
        ) : null}
      </div>
    );
  }
}

export default App;

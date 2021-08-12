import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      num1: 0,
      num2: 0,
      sum: null,
    };
  }
  handleChange1(a) {
    a = parseInt(a);
    this.setState({ num1: a });
  }
  handleChange2(a) {
    a = parseInt(a);
    this.setState({ num2: a });
  }
  submit() {
    let sum = this.state.num1 + this.state.num2;
    this.setState({ sum: sum });
  }
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange1(e.target.value)}
        ></input>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange2(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.submit()}
        ></button>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    );
  }
}

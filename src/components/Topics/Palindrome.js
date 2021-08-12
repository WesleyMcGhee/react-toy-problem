import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: "",
    };
  }
  handleChange(a) {
    this.setState({ userInput: a });
  }
  submit(b) {
    let reverse = b.split("").reverse().join("");
    if (b === reverse) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.submit(this.state.userInput)}
        ></button>
        <span className="resultsBox">{this.state.palindrome}</span>
      </div>
    );
  }
}

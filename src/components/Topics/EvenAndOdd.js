import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      addArray: [],
      userInput: "",
    };
  }
  handleChange(a) {
    this.setState({ userInput: a });
  }
  submit(b) {
    let numArr = b.split(",");
    let even = [];
    let odd = [];

    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] % 2 === 0) {
        even.push(parseInt(numArr[i], 10));
      } else {
        odd.push(parseInt(numArr[i], 10));
      }
    }

    this.setState({ evenArray: even, oddArray: odd });
    console.log(numArr);
    console.log(even);
    console.log(odd);
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.submit(this.state.userInput)}
        >
          Split
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

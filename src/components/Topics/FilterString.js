import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        "Hello",
        "There",
        "Mine",
        "Seeing",
        "Antidisestablishmentarianism",
      ],
      userInput: "",
      filteredArray: [],
    };
  }
  handleChange(a) {
    this.setState({ userInput: a });
  }
  submit(b) {
    let arr = this.state.unFilteredArray;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === b) {
        newArr.push(arr[i]);
      }
    }
    this.setState({ filteredArray: newArr });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.submit(this.state.userInput)}
        ></button>
        <span className="resultsBox filterStringRB">
          {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}

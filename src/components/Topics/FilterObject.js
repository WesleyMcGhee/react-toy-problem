import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        { name: "Wesley", age: 19, "hair Color": "Brown" },
        { name: "Michael", "hair Color": "Mullet", title: "Scrub" },
        { name: "Logan", facialHair: false, favoriteGame: "Flappy Bird" },
        { name: "Mitchel", hair: false, title: "Student" },
      ],
      userInput: "",
      filteredArray: [],
    };
  }
  handleChange(a) {
    this.setState({ userInput: a });
  }
  submit(b) {
    let unFiltered = this.state.unFilteredArray;
    let filteredArray = [];
    for (let i = 0; i < unFiltered.length; i++) {
      if (unFiltered[i].hasOwnProperty(b)) {
        filteredArray.push(unFiltered[i]);
      }
    }
    this.setState({ filteredArray: filteredArray });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.submit(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}

import React, { useState } from "react";
import "./FunFactButton.css";
import { Link } from "react-router-dom";

export default class FunFactButton extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        facts: ['Olivia is a big fan of turtles (for no particular reason).', 'Her favorite color is blue.', 'She has never been stung by a bee.', 'She has a sassy little sister.', 'She cannot drive.'],
        fact: '',
      };
    }

    handleClick() {
      this.setState({ fact: this.state.facts[Math.floor(Math.random() * this.state.facts.length)] });
      console.log(this.state.fact);
    }

    render() {
      return (
        <div>
          <div className="fact-text">
            {this.state.fact}
          </div>
          <button
            className="fact-button"
            onClick={this.handleClick.bind(this)}
            >
            Click here to generate a fun fact about Olivia!
          </button>
        </div>
      )
    }
  }
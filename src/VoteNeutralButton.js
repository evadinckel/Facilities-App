import React from 'react';
// import './index.css';
import axios from 'axios';

class VoteNeutralButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVote: null
    };
  }

  buttonClick() {
    axios
      .get('/vote_neutral')
      .then(response => {
        this.setState({ currentVote: response.data.votes });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="NeutralClass">
        <header className="App-header" />
        <button id="neutralButton" onClick={() => this.buttonClick()}>
          Vote Neutral!
        </button>
        <p id="voteDisplay">
          Current votes for NEUTRAL: {this.state.currentVote}
        </p>
      </div>
    );
  }
}
//find root and replace
export default VoteNeutralButton;

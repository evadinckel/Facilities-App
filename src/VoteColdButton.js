import React from 'react';
// import './index.css';
import axios from 'axios';

class VoteColdButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVote: null
    };
  }

  buttonClick() {
    axios
      .get('/vote_cold')
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
      <div className="ColdClass">
        <header className="App-header" />
        <button id="coldButton" onClick={() => this.buttonClick()}>
          Vote Cold!
        </button>
        <p id="voteDisplay">Current votes for COLD: {this.state.currentVote}</p>
      </div>
    );
  }
}
//find root and replace
export default VoteColdButton;

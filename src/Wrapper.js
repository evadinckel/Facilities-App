import React, { Component } from 'react';
import VoteHotButton from './VoteHotButton.js';
import axios from 'axios';

// import VoteColdButton from './VoteColdButton.js';
// import VoteNeutralButton from './VoteNeutralButton.js';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = {
      hotVote: 0
    };
  }

  buttonClick() {
    console.log(this)
    axios
      .get('/vote_hot')
      .then(response => {
        this.setState({ hotVote: response.data.votes });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <VoteHotButton count={this.state.hotVote} onclick={this.buttonClick} />
      </div>
    );
  }
}

export default Wrapper;

import React, { Component } from 'react';
import VoteButton from './VoteButton.js';
import axios from 'axios';

// import VoteColdButton from './VoteColdButton.js';
// import VoteNeutralButton from './VoteNeutralButton.js';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = {
      hotVote: 0,
      coldVote: 0,
      neutralVote: 0
    };
  }

  buttonClick(type) {


    console.log(this);
    axios
      .get(url)
      .then(response => {
buttonVariables()['setVoteFunction']

      })
      .catch(error => {
        console.log(error);
      });
  }

buttonVariables() {
  if (type === 'hot') {
    {
      url: '/vote_hot',
      setVoteFunction:this.setState({ hotVote: response.data.votes });
    }
  } else if (type === 'cold') {
    {
      url: '/vote_cold',
      setVoteFunction:this.setState({ coldVote: response.data.votes });
    }
  } else {
    {
      url: '/vote_neutral',
      setVoteFunction:this.setState({ neutralVote: response.data.votes });
    }
  }
}


  render() {
    return (
      <div>
        <VoteButton
          count={this.state.hotVote}
          onclick={this.buttonClick('hot')}
          buttonID={'HotButton'}
          className={'Hot Class'}
          buttonText={'Hot'}
        />
        <VoteButton
          count={this.state.coldVote}
          onclick={this.buttonClick('cold')}
          buttonID={'ColdButton'}
          className={'Cold Class'}
          buttonText={'Cold'}
        />
        <VoteButton
          count={this.state.neutralVote}
          onclick={this.buttonClick}
          buttonID={'Neutral Button'}
          className={'Neutral Class'}
          buttonText={'Neutral'}
        />
      </div>
    );
  }
}

export default Wrapper;

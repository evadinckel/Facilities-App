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
      hotVote: 100,
      coldVote: 200,
      neutralVote: 300
    };
  }


  componentWillMount() {
    this.initialStateCall();
  }

  buttonClick(url) {
    axios
      .get('/vote_' + url + '?id=eva')
      .then(response => {
        console.log(response);
        this.chooseStateSet(url, response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  chooseStateSet(url, response) {
    const votes = [
      {
        key: 'hot',
        state: { hotVote: response.data.votes }
      },
      {
        key: 'cold',
        state: { coldVote: response.data.votes }
      },
      {
        key: 'neutral',
        state: { neutralVote: response.data.votes }
      }
    ];

    var stateUpdate = votes.find(vote => vote.key === url).state;
    this.setState(stateUpdate);

    /*
    if (url === 'hot') {
      this.setState({ hotVote: response.data.votes });
    } else if (url === 'cold') {
      this.setState({ coldVote: response.data.votes });
    } else {
      this.setState({ neutralVote: response.data.votes });
    }*/
  }

  initialStateCall() {

    axios
      .get('/votes_current')
      .then(response => {
        this.setState({
          hotVote: response.data.hotVotes,
          coldVote: response.data.coldVotes,
          neutralVote: response.data.neutralVotes
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <VoteButton
          count={this.state.hotVote}
          onclick={() => this.buttonClick('hot')}
          buttonID={'HotButton'}
          className={'Hot Class'}
          buttonText={'Hot'}
        />
        <VoteButton
          count={this.state.coldVote}
          onclick={() => this.buttonClick('cold')}
          buttonID={'ColdButton'}
          className={'Cold Class'}
          buttonText={'Cold'}
        />
        <VoteButton
          count={this.state.neutralVote}
          onclick={() => this.buttonClick('neutral')}
          buttonID={'Neutral Button'}
          className={'Neutral Class'}
          buttonText={'Neutral'}
        />
        cookieID :{this.props.user}
      </div>
    );
  }
}

export default Wrapper;

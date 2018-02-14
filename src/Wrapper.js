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
      hotVote:  0,
      coldVote: 0,
      neutralVote: 0
    };

    this.initialStateCall()
  }

  // buttonVariables(type, response) {
  //   if (type === 'hot') {
  //     return {
  //       url: '/vote_hot',
  //       setVoteFunction:this.setState({ hotVote: response.data.votes })
  //     };
  //   } else if (type === 'cold') {
  //     return {
  //       url: '/vote_cold',
  //       setVoteFunction:this.setState({ coldVote: response.data.votes })
  //     };
  //   } else {
  //     return {
  //       url: '/vote_neutral',
  //       setVoteFunction:this.setState({ neutralVote: response.data.votes })
  //     };
  //   };
  // };


  buttonClick(url) {
    // console.log('buttonClick THIS', this)
    // console.log(this);
    axios
      .get('/vote_'+url)
      .then(response => {
        console.log(response)
        this.chooseStateSet(url, response)

      })
      .catch(error => {
        console.log(error);
      });
  }

  chooseStateSet(url,response){
    // console.log('chooseStateSet THIS',this)
    // console.log('chooseStateSet called')
    if(url==='hot'){
        this.setState({hotVote: response.data.votes})
    } else if (url==='cold') {
       this.setState({coldVote: response.data.votes})
    } else {
       this.setState({neutralVote: response.data.votes})
    }
  }

  initialStateCall(){
    axios
      .get('/votes_current')
      .then(response => {
        // console.log(response.data.hotVotes)
        this.setState({hotVote: response.data.hotVotes})
        this.setState({coldVote: response.data.coldVotes})
        this.setState({neutralVote: response.data.neutralVotes})
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
          onclick={()=>this.buttonClick('hot')}
          buttonID={'HotButton'}
          className={'Hot Class'}
          buttonText={'Hot'}
        />
        <VoteButton
          count={this.state.coldVote}
          onclick={()=>this.buttonClick('cold')}
          buttonID={'ColdButton'}
          className={'Cold Class'}
          buttonText={'Cold'}
        />
        <VoteButton
          count={this.state.neutralVote}
          onclick={()=>this.buttonClick('neutral')}
          buttonID={'Neutral Button'}
          className={'Neutral Class'}
          buttonText={'Neutral'}
        />
      </div>
    );
  }
}

export default Wrapper;

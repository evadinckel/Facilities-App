import React from 'react';
// import './index.css';
import Counter from './counterModel.js';

class VotingButton extends React.Component {
  constructor(props) {
    super(props);
    this.counter = new Counter()
    this.state = {
      currentVote: null
    };
  }

  render() {
    return ([
    <button onClick={() => this.setState( { currentVote: ""+ this.counter.apiCall('http://localhost:4000/vote_hot') } )
  } id='hotButton' key='1'>Vote Hot!</button>,
  <button onClick={() => this.setState( { currentVote: this.counter.voteCold() } )
} id='coldButton' key='2'>Vote Cold!</button>,
    <p id='voteDisplay' key='3'>Hello Nero, the vote stands at {this.state.currentVote}</p>
    // console.log(this.state.counter)
    // <p>{this.props.name}</p>

  ])
  }
}
//find root and replace
export default VotingButton;

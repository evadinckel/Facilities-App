import React from 'react';
import ReactDOM from 'react-dom';
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
    <button onClick={() => this.setState( { currentVote: this.counter.voteHot() } )
  } id='hotButton' key='1'>Vote Hot!</button>,
  <button onClick={() => this.setState( { currentVote: this.counter.voteCold() } )
} id='coldButton' key='2'>Vote Cold!</button>,
    <p id='voteDisplay' key='3'>Hello Nero, the vote stands at {this.state.currentVote}</p>
    // console.log(this.state.counter)
    // <p>{this.props.name}</p>

  ])
  }
}
// ReactDOM.render(<VotingButton />, document.getElementById('root')
// ); //find root and replace
export default VotingButton;

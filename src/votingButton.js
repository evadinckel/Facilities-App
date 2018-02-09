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
    <button onClick={() => this.counter.apiCall('http://localhost:4000/vote_hot').then((value) => {
      this.setState({currentVote:value})
    })
  } id='hotButton' key='1'>Vote Hot!</button>

    // console.log(this.state.counter)
    // <p>{this.props.name}</p>
  ])
  }
}
//find root and replace
export default VotingButton;

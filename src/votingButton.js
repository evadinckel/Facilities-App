import React from 'react';
// import './index.css';
import Counter from './counterModel.js';
import axios from "axios";

class VotingButton extends React.Component {
  constructor(props) {
    super(props);
    this.counter = new Counter()
    this.state = {
      currentVote: null
    };
  }

  buttonClick() {
    axios.get('/vote_hot')
    .then((response) => {
      this.setState({currentVote: response.data.votes});
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button id='hotButton' onClick={() => this.buttonClick() }>Vote Hot!</button>
        <p id='voteDisplay'>Current votes for HOT: {this.state.currentVote}</p>
      </div>
    );
  }
}
//find root and replace
export default VotingButton;

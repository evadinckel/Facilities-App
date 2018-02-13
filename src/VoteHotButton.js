import React from 'react';
// import './index.css';
import axios from "axios";

class VoteHotButton extends React.Component {
  constructor(props) {
    super(props);
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
        </header>
        <button id='hotButton' onClick={() => this.buttonClick() }>Vote Hot!</button>
        <p id='voteDisplay'>Current votes for HOT: {this.state.currentVote}</p>
      </div>
    );
  }
}
//find root and replace
export default VoteHotButton;

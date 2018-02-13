import React, { Component } from 'react';
import VoteHotButton from './VoteHotButton.js';
import VoteColdButton from './VoteColdButton.js';
import VoteNeutralButton from './VoteNeutralButton.js';

class App extends Component {
  render() {
    return (
      <div>
        <VoteHotButton />
        <VoteColdButton />
        <VoteNeutralButton />
      </div>
    );
  }
}

export default App;

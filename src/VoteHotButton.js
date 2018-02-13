import React from 'react';
// import './index.css';

class VoteHotButton extends React.Component {

  render() {
    return (
      <div className="HotClass">
        <header className="App-header" />
        <button id="hotButton" onClick={this.props.onclick}>
          Vote Hot!
        </button>
        <p id="voteDisplay">Current votes for HOT: {this.props.count}</p>
      </div>
    );
  }
}
//find root and replace
export default VoteHotButton;

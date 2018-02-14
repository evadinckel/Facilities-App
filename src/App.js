import React, { Component } from 'react';
import Wrapper from './Wrapper.js';



class App extends Component {

  componentDidMount() {
    // let time = new Date()
    // let secs = time.getTime()
    // let cookie = document.cookie = `username=${secs}`
    console.log(document.cookie)
  // console.log(cookie)
}

  render() {
    return (
      <div>
        <Wrapper />
      </div>
    );
  }
}

export default App;

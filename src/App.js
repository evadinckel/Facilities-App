import React, { Component } from 'react';
import Wrapper from './Wrapper.js';



class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    username: this.componentDidMount()
  };
  console.log(this.state.username)
}


  componentDidMount() {
    if (document.cookie.includes('username') === false) {
    const time = new Date()
    const secs = time.getTime()
    document.cookie = `username=${secs}`
  } else {
    return document.cookie
  }

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

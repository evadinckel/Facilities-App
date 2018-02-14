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
      const milSecs = time.getTime()
      // ${milSecs}
      document.cookie = `username=david`
      console.log('cookie', document.cookie)
    }
      return document.cookie

  }

  
  render() {
    return (
      <div>
        <Wrapper user={this.state.username}/>
      </div>
    );
  }
}

export default App;

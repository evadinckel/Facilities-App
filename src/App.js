import React, { Component } from 'react';
import Wrapper from './Wrapper.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookieID: null
    };
  }


  componentWillMount() {

    const time = new Date()
    const milSecs = time.getTime()

    if (document.cookie.includes('username') === false) {
      document.cookie = `username=${milSecs}`
    }

    this.setState({ cookieID: document.cookie })

  }


  render() {
    return (
      <div>
        <Wrapper user={this.state.cookieID}/>
      </div>
    );
  }
}

export default App;

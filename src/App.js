import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
<p className="App-intro" size="100"> I was told the purpose of the internet is to look at cat pictures.  Why can't I see cat pictures? </p>
      </div>
    );
  }
}

export default App;

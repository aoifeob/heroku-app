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
<p> I was told the purpose of the internet is to look at cat pictures.  Why can't I see cat pictures? </p>

<p> The following is my definitive list of Best Internet Cats:</p>
<p><ol><li>Grumpy Cat</li><li>British Treasury Cat</li><li>10 Downing Street Cat</li><li>Garfield</li></ol></p>
<p> I love cats.  I love every kind of cat.</p>
      </div>
    );
  }
}

export default App;

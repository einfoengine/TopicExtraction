import React, { Component } from 'react';
import Header from './header';
import Engine from './engine';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Engine />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import FlexboxGenerator from './containers/flexbox-generator/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlexboxGenerator />
      </div>
    );
  }
}

export default App;

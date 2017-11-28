import React, { Component } from 'react';
import Header from './Header.js';
import TextAnalyzer from './TextAnalyzer.js';

class App extends Component {

  render() {
    return(
      <div>
        <Header />
        <TextAnalyzer />
      </div>
    );
  }
}

export App;
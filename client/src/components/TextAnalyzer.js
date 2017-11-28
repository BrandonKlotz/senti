import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './Form.js';
import DocumentResults from './DocumentResults.js';
//import SentenceAnalysis from './SentenceAnalysis.js';

class TextAnalyzer extends Component {

  render() {

    if (this.props.isLoading != true && this.props.analysisResults != {}) {
      return (
        <div className="App">
          <Form />
        </div>
      );
    } else if (this.props.isLoading == true) {
      return (
        <div className="App">
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <DocumentResults />
          //Sentence analysis component will go here.
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    analysisResults: state.analysisResults
  }
}

export default connect(mapStateToProps, null)(TextAnalyzer);
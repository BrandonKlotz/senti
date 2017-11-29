import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addResults } from '../actions';
import { isEmpty } from 'lodash';

import Form from './Form.js';
import DocumentResults from './DocumentResults.js';
import SentenceResults from './SentenceResults.js';

class TextAnalyzer extends Component {

  render() {

    if (this.props.isLoading !== true && isEmpty(this.props.displayResults) ) {
      return (
        <div className="App">
          <Form onSubmit={this.props.addResults}/>
        </div>
      );
    } else if (this.props.isLoading === true) {
      return (
        <div className="App">
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <DocumentResults />
          <SentenceResults />
        </div>
      );
    }
  }
}
const mapActionsToProps = {
  addResults
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    displayResults: state.displayResults
  };
};

export default connect(mapStateToProps, mapActionsToProps)(TextAnalyzer);

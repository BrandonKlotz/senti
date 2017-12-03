import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addResults } from '../actions';
import { isEmpty } from 'lodash';

import Form from './Form.js';
import Loader from './Loading.js';
import DocumentResults from './DocumentResults.js';
import SentenceResults from './SentenceResults.js';

class TextAnalyzer extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  render() {

    if (this.props.loading !== true && isEmpty(this.props.displayResults) ) {
      return (
        <div className="App">
          <div className="container">
            <div className="splash">
              <h1>The professional email analyzer.</h1>
              <p>We analyze messages sentence-by-sentence for overall tone and suggestions on where to make positive changes.</p>
            </div>
          </div>
          <Form onSubmit={this.props.addResults}/>
        </div>
      );
    } else if (this.props.loading === true) {
      return (
        <div className="App">
          <Loader />
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Your Results</h1>
          <DocumentResults />
          <SentenceResults />
          <Form value = {this.props.text} onSubmit={this.props.addResults}/>
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
    loading: state.loading,
    displayResults: state.displayResults
  };
};

export default connect(mapStateToProps, mapActionsToProps)(TextAnalyzer);

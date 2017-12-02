import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addResults } from '../actions';
import { isEmpty } from 'lodash';
import Icon from 'watson-react-components';

import Form from './Form.js';
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
          <Form onSubmit={this.props.addResults}/>
        </div>
      );
    } else if (this.props.loading === true) {
      return (
        <div className="App">
          Loading...
        </div>
      );
    } else {
      return (
        <div className="App">
          <DocumentResults />
          <SentenceResults />
          <Form onSubmit={this.props.addResults}/>
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

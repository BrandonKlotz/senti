import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addResults } from '../actions';
import { isEmpty } from 'lodash';

import Form from './Form.js';
import Loader from './Loading.js';
import DocumentResults from './DocumentResults.js';
import SentenceResults from './SentenceResults.js';
import Modal from './Modal';

class TextAnalyzer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: false,
    };
  }

  render() {
    if (this.props.loading !== true && isEmpty(this.props.displayResults) ) {
      return (
        <div className="App">
          <Modal />
          <div className="container">
  					<div className="splash">
  						<h1>The Professional Email Checker.</h1>
  						<p className="splashText">Type or paste your email. We'll look for overall tones, red flags, and give helpful suggestions on where to edit.</p>
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
          <Modal />
          <h1>Your Results</h1>
          <DocumentResults />
          <SentenceResults />
          <div className="container">
  					<div className="splash">
  						<h2>Edit your current message.</h2>
  						<p className="splashText">Try to get rid of the red by editing your message and reanalyze it.</p>
  					</div>
  				</div>
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
    displayResults: state.displayResults,
    isModalOpen: state.isModalOpen
  };
};

export default connect(mapStateToProps, mapActionsToProps)(TextAnalyzer);

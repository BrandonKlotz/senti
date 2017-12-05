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
      loading: false
    };
  }

  render() {
    // If statement which based on state returns what view of our app.
    // The initial state has it first return loading: false & there are no displayResults
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
      // Return Statement for our loading animation
      // loading === true when in the Actions the requestResults function is called the new state is set in the Reducer.
      // requestResults is dispatched by addResults (triggered by an event) and loading set to false
      // by the receiveResults function which is also dispatched by addResults but after the api call.
      return (
        <div className="App">
          <Loader />
        </div>
      );
    } else {
      // Our Return Statement for "Results" after analyzing
      return (
        <div className="App">
          <Modal />
          <h1>Your Results</h1>
          <DocumentResults />
          <SentenceResults />
          {/* This text is changed from the initial Welcome Splash page text */}
          <div className="container">
  					<div className="splash">
  						<h2>Edit your current message.</h2>
  						<p className="splashText">Try to get rid of the red by editing your message and reanalyze it.</p>
  					</div>
  				</div>
          {/* Our form component has a callback function (need to explain the callback) */}
          <Form value={this.props.text} onSubmit={this.props.addResults}/>
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

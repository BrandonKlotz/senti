import React, { Component } from 'react';
import Form from './Form.js';
import { connect } from 'react-redux';
import { addResults } from '../actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form onSubmit={this.props.addResults}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        displayResults: state.displayResults
    }
}

const mapActionsToProps = {
    addResults
}

export default connect(mapStateToProps, mapActionsToProps)(App);

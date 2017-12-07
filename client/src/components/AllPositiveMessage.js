import React, { Component } from 'react';
import { connect } from 'react-redux';
import "font-awesome/css/font-awesome.css";


class AllPositiveMessage extends Component {

  render() {

    console.log(this.props.stillNegative);

    if (!this.props.stillNegative) {
      return (
        <div id="AllPositiveMessage">
          <p>You've achieved all positive document tones, you're ready to send!</p>
        </div>
      )
    }
    else {
      return (
        <div id="StillNegativeMessage">
          <p>We've detected negative tones in your message! Edit your text below and minimize red flags.</p>
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    stillNegative: state.stillNegative
  };
}

export default connect(mapStateToProps, null) (AllPositiveMessage);
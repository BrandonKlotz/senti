import React, { Component } from 'react';
import { connect } from 'react-redux';

class DocumentResults extends Component {
  render() {
    return (
      <div className="DocumentResults">
        <p> Here is a test listing of a detected document theme: </p>
        //<p> {this.props.analysisResults.document_tone.tones[0].tone_name} </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		analysisResults = state.analysisResults
	}
}

export default connect(mapStateToProps, null)(DocumentResults);

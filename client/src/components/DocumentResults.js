import React, { Component } from 'react';
import { connect } from 'react-redux';

class DocumentResults extends Component {
  render() {

    const detectedThemes = this.props.displayResults.document_tone.tones.map(tone => 
      <p>{tone.tone_name}</p>
      );

    return (
      <div className="DocumentResults">
        <h2>Results</h2>
        {detectedThemes}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		displayResults: state.displayResults
	}
}

export default connect(mapStateToProps, null)(DocumentResults);

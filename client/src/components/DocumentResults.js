import React, { Component } from 'react';
import { connect } from 'react-redux';

class DocumentResults extends Component {

  render() {

    const detectedDocThemes = this.props.displayResults.document_tone.tones.map(function(tone) {

      if(tone.tone_name === "Joy" || tone.tone_name === "Analytical") {
        return (
          <div>
            <button class="accordion">{tone.tone_name}</button>
              <div class="panel">
                <p>This is a positive one.</p>
              </div>
          </div>
        )
      }
      else {
        return (
          <div>
            <button class="accordion">{tone.tone_name}</button>
              <div class="panel">
                <p>This is a negative one.</p>
              </div>
          </div>
        )
      }
    });

    return (
      <div className="DocumentResults">
        <h2>Results</h2>
        {detectedDocThemes}
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

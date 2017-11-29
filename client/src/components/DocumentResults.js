import React, { Component } from 'react';
import { connect } from 'react-redux';

class DocumentResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: "Joy"
    };
  }

  render() {

    //if active state = add open class to element

    const detectedDocThemes = this.props.displayResults.document_tone.tones.map(tone => {

      if(tone.tone_name === "Joy" || tone.tone_name === "Analytical") {
        return (
          <div>
            <div  className={`accordion accordion_positive ${tone.tone_name === this.state.open ? "open" : "collapsed" }`}
                  onClick={this.toggleAccordion}>
                    {tone.tone_name}
                    <p>This is a positive one.</p>
            </div>
          </div>
        )
      }
      else {
        return (
          <div>
            <div  className={`accordion accordion_positive ${tone.tone_name === this.state.open ? "open" : "collapsed" }`}
                  onClick={this.toggleAccordion}>
                    {tone.tone_name}
                    <p>This is a negative one.</p>
            </div>
          </div>
        )
      }
    });

    return (
      <div className="DocumentResults">
        <h2>Results</h2>
        <div className="AccordianContainer">
          {detectedDocThemes}
        </div>
      </div>
    );
  }

  toggleAccordion = (event) => {
    return
  }
}




const mapStateToProps = (state) => {
	return {
		displayResults: state.displayResults
	}
}

export default connect(mapStateToProps, null)(DocumentResults);

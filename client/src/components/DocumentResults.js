import React, { Component } from 'react';
import { connect } from 'react-redux';

class DocumentResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: "open"
    };
  }

  render() {

    //if active state = add open class to element

    const detectedDocThemes = this.props.displayResults.document_tone.tones.map(tone => {

      if (tone.tone_name === "Joy") {
        return (
            <div  className={`accordion accordion_positive ${tone.tone_name === this.state.open?"open":"collapsed"}`}
                  key={tone.tone_name}
                  onClick={() => this.toggleAccordion(tone.tone_name)}>
                    {tone.tone_name}
                    <p>This is a positive one.</p>
            </div>
        )
      }
      else {
        return (
            <div  className={`accordion accordion_negative ${tone.tone_name === this.state.open?"open":"collapsed"}`}
                  key={tone.tone_name}
                  onClick={() => this.toggleAccordion(tone.tone_name)}>
                    {tone.tone_name}
                    <p>This is a negative one.</p>
            </div>
        )
      }

      });

      console.log(detectedDocThemes);

      var toneArray = detectedDocThemes.length;

      if (toneArray === 0) {
        function reloader() {
          window.location.reload();
        }
        alert('No Emotions were analyzed please try again.');
        return reloader();
      } else {
        return (
          <div className="DocumentResults">
            <h2>Results</h2>
            <div className="AccordionContainer">
              {detectedDocThemes}
            </div>
          </div>
        )
      }
    }

  toggleAccordion = (tone_name) => {
    if (tone_name === this.state.open) {
      this.setState({
        open: ""
      })
    } else {
      this.setState({
        open: tone_name
      })
    }
  }
}


const mapStateToProps = (state) => {
  return {
    displayResults: state.displayResults
  }
}

export default connect(mapStateToProps, null)(DocumentResults);

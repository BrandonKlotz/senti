import React, { Component } from 'react';
import { connect } from 'react-redux';
import "font-awesome/css/font-awesome.css";
import toneData from '../ToneData';


class DocumentResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: "open"
    };
  }
//  Hello world! I am having an awesome day! I hate you.
  render() {

    //if active state = add open class to element

    const detectedDocThemes = this.props.displayResults.document_tone.tones.map(tone => {

       for(var i=0; i<toneData.length; i++) {
          var selectedTone = toneData[i];

      console.log(selectedTone.tone);

      if(tone.tone_name === selectedTone.tone) {

        if (selectedTone.positive) {
        return (
            <div  className={`accordion accordion_positive ${tone.tone_name === this.state.open?"open":"collapsed"}`}
                  key={tone.tone_name}
                  onClick={() => this.toggleAccordion(tone.tone_name)}>
                  <i class="fa fa-check" aria-hidden="true"></i>
                    {tone.tone_name}
                    <p>{tone.tone_name}: {selectedTone.text}</p>
            </div>
        )
      }

      else {
        return (
            <div  className={`accordion accordion_negative ${tone.tone_name === this.state.open?"open":"collapsed"}`}
                  key={tone.tone_name}
                  onClick={() => this.toggleAccordion(tone.tone_name)}>
                  <i class="fa fa-flag" aria-hidden="true"></i>
                    {tone.tone_name}
                    <p>{tone.tone_name}: {selectedTone.text}</p>
            </div>
        )
      }
    }
  }
    });


    return (
      <div className="DocumentResults">
        <h2>Results</h2>
        <div className="AccordionContainer">
          {detectedDocThemes}
        </div>
      </div>
    );
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import "font-awesome/css/font-awesome.css";
import toneData from '../ToneData';


class DocumentResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: ""
    };
  }
  render() {

    //if active state = add open class to element

    const detectedDocThemes = this.props.displayResults.document_tone.tones.map(tone => {

      for(var i=0; i<toneData.length; i++) {
        var selectedTone = toneData[i];

        if(tone.tone_name === selectedTone.tone) {

          if (selectedTone.positive) {
            return (
              <div  className={`accordion ${tone.tone_name === this.state.open?"open":"collapsed"}`}
                    key={tone.tone_name}
                    onClick={() => this.toggleAccordion(tone.tone_name)}>
                <div className="AccordionHeader">
                  <span>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    {tone.tone_name}
                  </span>
                  <span>
                    <i className={`fa fa-plus ${tone.tone_name === this.state.open?"hide":"show"}`} aria-hidden="true"></i>
                    <i className={`fa fa-minus ${tone.tone_name === this.state.open?"show":"hide"}`} aria-hidden="true"></i>
                    <hr />
                  </span>
                </div>
                <p>{selectedTone.text}</p>
              </div>
            );
          } else {
            return (
              <div  className={`accordion ${tone.tone_name === this.state.open?"open":"collapsed"}`}
                    key={tone.tone_name}
                    onClick={() => this.toggleAccordion(tone.tone_name)}>
                <div className="AccordionHeader">
                  <span>
                    <i className="fa fa-flag" aria-hidden="true"></i>
                    {tone.tone_name}
                  </span>
                  <span>
                    <i className={`fa fa-plus ${tone.tone_name === this.state.open?"hide":"show"}`} aria-hidden="true"></i>
                    <i className={`fa fa-minus ${tone.tone_name === this.state.open?"show":"hide"}`} aria-hidden="true"></i>
                    <hr />
                  </span>
                </div>
                <p>{selectedTone.text}</p>
              </div>
            )
          }
        }
      } 
    });

    return (
      <div className="DocumentResults">
        <div className="AccordionContainer">
          <h2>Overall Tones</h2>
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

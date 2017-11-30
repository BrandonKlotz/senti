import React, { Component } from 'react';
import { connect } from 'react-redux';

import { join, chunk, uniq } from 'lodash';

class SentenceResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTone: ""
    };
  }

  render() {

    const sentences = this.props.displayResults.sentences_tone.map(function(sentence) {

      return (
        <div
          key={sentence.sentence_id}
          className={join(sentence.tones.map(tone => {
            return(tone.tone_id)
          }), " ")}>
            {sentence.text}
        </div>
      )
    });

    const buttons = this.props.displayResults.sentences_tone.map(function(sentence) {
    
      return (
        sentence.tones.map(tone => {
          return(tone.tone_name)
        })
      )
    });

    var buttonsText = buttons.map(function(item) { 
      return join(item); 
    });

    var uniqueButtons = uniq(buttonsText);

    var displayButtons = uniqueButtons.map(button => {
      return (<div className={button+"toggle"}>{button}</div>)
    })

    console.log(displayButtons);

    return (
      <div className="SentenceResults">
        {sentences}
        {displayButtons}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		displayResults: state.displayResults
	}
}

export default connect(mapStateToProps, null)(SentenceResults);

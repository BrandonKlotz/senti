import React, { Component } from 'react';
import { connect } from 'react-redux';

import { join, uniq, flatten } from 'lodash';


class SentenceResults extends Component {

  render() {
    const sentences = this.props.displayResults.sentences_tone.map((sentence) => {

      return (
          <div
            key={sentence.sentence_id}
            className={join(sentence.tones.map(tone => {
              return(tone.tone_id);
            }), " ")}>
             <span> {sentence.text}</span>
          </div>
          );

    });

    const toneArray = mapSentencesAndReturnEmotionsArray(this.props.displayResults.sentences_tone);

    const buttons = toneArray.map(function(tone) {
      return (
        <div key={tone} className="toggleButton">{tone}</div>
      )
    })


    return (
      <div className="SentenceResults">
        {sentences}
        {buttons}
      </div>
    );
  }
}

function mapSentencesAndReturnEmotionsArray(sentences) {
  var detectedEmotionsArray = sentences.map(sentence => {return mapIndividualSentenceTones(sentence)});
  var uniqueDetectedEmotions = uniq(flatten(detectedEmotionsArray));
  return uniqueDetectedEmotions;
}

function mapIndividualSentenceTones(sentence){
  var indidivualEmotionsArry = sentence.tones.map(tone => {return(tone.tone_name)});
  return indidivualEmotionsArry;
}

const mapStateToProps = (state) => {
	return {
		displayResults: state.displayResults
	};
};

export default connect(mapStateToProps, null)(SentenceResults);

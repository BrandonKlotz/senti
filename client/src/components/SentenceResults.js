import React, { Component } from 'react';
import { connect } from 'react-redux';
import { join, uniq, flatten } from 'lodash';
import toneData from '../ToneData';


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

      var ButtonClass;

      function checkIfButtonPositive(tone) {
        for (var i = 0; i < toneData.length; i++) {
          var selectedTone = toneData[i];
          if (tone === selectedTone.tone) {
            if (selectedTone.positive) {
              ButtonClass = "PositiveButton";
            } else {
              ButtonClass = "NegativeButton";
            }
            return ButtonClass
          }
        }
      }

      return (
        <div key={tone} className={`toggleButton ${checkIfButtonPositive(tone)}`}>{tone}</div>
      )
    });

    return (
      <div>
        <div className="SentenceResults">
          {sentences}
        </div>
        <div className="">
          {buttons}
        </div>
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

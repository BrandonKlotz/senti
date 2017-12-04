import React, { Component } from 'react';
import { connect } from 'react-redux';
import { join, uniq, flatten, without } from 'lodash';
import toneData from '../ToneData';

class SentenceResults extends Component {
        constructor(props) {
          super(props);
          this.state = {
            highlighted: ""
           };
       }

      render() {
        let isHighlighted = "";
          const sentences = this.props.displayResults.sentences_tone.map((sentence) => {

            const classnames = join(sentence.tones.map(tone => { return (`${tone.tone_name === this.state.highlighted?" highlighted " + tone.tone_id :""}`); })," ");
            console.log(classnames);

            return (
                  <div key={sentence.sentence_id} className={classnames}>
                      <span className="returnSentence">{sentence.text}&nbsp;</span>
                  </div>
                );
          });

           const toneArray = without(this.mapSentencesAndReturnEmotionsArray(this.props.displayResults.sentences_tone), "Tentative");

           const buttons = toneArray.map((tone) => {
              var ButtonClass;

             return (  <div key={tone}
                                    className={`toggleButton ${tone}`}
                                    onClick={() => this.toneToggle(tone)}>{tone}</div>  );
           });

          return (
            <div className="container">
              <h2>Sentence Tones:</h2>
              <div className="SentenceResults">
                <div id="SentenceReturn">{sentences}</div>
                <div id="ToggleControlsAndLabels">
                  <div id="buttonSeparater"></div>
                  <h4>Click to toggle selected emotion:</h4>
                  <div className="toneToggleButtons">{buttons}</div>
                </div>
              </div>
            </div>
          );
       }

  mapSentencesAndReturnEmotionsArray = (sentences) => {
    var detectedEmotionsArray = sentences.map(sentence => {return this.mapIndividualSentenceTones(sentence)});
    var uniqueDetectedEmotions = uniq(flatten(detectedEmotionsArray));
    return uniqueDetectedEmotions;
  };

  mapIndividualSentenceTones = (sentence) => {
    var individualEmotionsArray = sentence.tones.map(tone => {return(tone.tone_name)});
    return individualEmotionsArray;
  };

  toneToggle = (tone) => {
    this.setState({
      highlighted: tone
    });
  };
}

const mapStateToProps = (state) => {
	return {
		highlighted: state.highlighted,
    displayResults: state.displayResults
	};
};

export default connect(mapStateToProps, null)(SentenceResults);

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
          const sentences = this.props.displayResults.sentences_tone.map((sentence) => {
            return (
                  <div key={sentence.sentence_id} className={join(sentence.tones.map(tone => {
                      return(tone.tone_id);
                    }), " ")}>
                      <span className={`${sentence.tone_name === this.state.highlighted?`${sentence.tone_name}`:""}`}>{sentence.text}</span>
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
                <h2>Sentence-By-Sentence Tones</h2>
                <div className="SentenceResults">
                  {sentences}
                </div>
                <div className="toneToggleButtons">
                  {buttons}
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
        var indidivualEmotionsArry = sentence.tones.map(tone => {return(tone.tone_name)});
        return indidivualEmotionsArry;
    };

    toneToggle = (tone) => {
      // console.log(tone);

        this.setState({
          highlighted: tone
          });


      console.log(this.state.highlighted);
    };



    checkIfHighlighted = (tone) => {
      var highlightedClass;
         for (var i = 0; i < toneData.length; i++) {
            var selectedTone = toneData[i];
              if (tone === selectedTone.tone) {
                   if (selectedTone.positive) {
                      highlightedClass = "PositiveButton";
                   } else {
                      highlightedClass = "NegativeButton";
                   }
                  return highlightedClass;
              }
         }
      };



}

const mapStateToProps = (state) => {
	return {
		highlighted: state.highlighted,
             displayResults: state.displayResults
	};
};

export default connect(mapStateToProps, null)(SentenceResults);

// const checkIfButtonPositive = (tone) => {
//                  for (var i = 0; i < toneData.length; i++) {
//                     var selectedTone = toneData[i];
//                       if (tone === selectedTone.tone) {
//                            if (selectedTone.positive) {
//                               ButtonClass = "PositiveButton";
//                            } else {
//                               ButtonClass = "NegativeButton";
//                            }
//                           return ButtonClass;
//                       }
//                  }
//               };

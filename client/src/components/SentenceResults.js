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
            debugger;
            const checkIfShouldBeHighlighted = sentence.tones.map(tone => {
                if(tone.tone_name === this.state.highlighted) {
                  isHighlighted = "highlighted ";
                  return isHighlighted;
                } else {
                  isHighlighted = "";
                  return isHighlighted;
                };
            })

            const classnames = isHighlighted + join(sentence.tones.map(tone => { return (tone.tone_id); })," ");
            console.log(classnames);
            const space = "&nbsp;";

            return (
                  <div key={sentence.sentence_id} className={classnames}>
                      <span>{sentence.text}&nbsp;</span>
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
        var individualEmotionsArray = sentence.tones.map(tone => {return(tone.tone_name)});
        return individualEmotionsArray;
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

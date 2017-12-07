import React, { Component } from 'react';
import { connect } from 'react-redux';
import { join, uniq, flatten, without } from 'lodash';

class SentenceResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: ""
    };
  }

  render() {
    
    //  Constructing the sentences with appropriate text and classnames
             
    const sentences = this.props.displayResults.sentences_tone.map((sentence) => {

      const classnames = join(sentence.tones.map(tone => { return (`${tone.tone_name === this.state.highlighted?" highlighted " + tone.tone_id :""}`); })," ");

      const scores = sentence.tones.map(tone => { return (<span key={tone.tone_id} className={`${tone.tone_id+tone.tone_name}`}>
                                                                                             {`${tone.score.toFixed(2) + ": " + tone.tone_name}`}<br/>
                                                                                             </span>);
                                                                                    });    
        //  Where we actually return the JSX to display sentences
        return (
          <div key={sentence.sentence_id} className={classnames}>
            <div className="sentenceText">
              <span onclick="">{sentence.text}&nbsp;</span>
                <div className="scoreInfo">
                  {scores}
                </div>
            </div>
          </div>
        );
    });

        //  Mapping through the buttons using each unique tone and omitting Tentative
             const toneArray = without(this.mapSentencesAndReturnEmotionsArray(this.props.displayResults.sentences_tone), "Tentative");
             const buttons = toneArray.map((tone) => {
                     return (  <div key={tone}
                                    className={`toggleButton ${tone}`}
                                    onClick={() => this.toneToggle(tone)}>{tone}</div>  );
           });

              return (
                    <div className="container">
                          <h2>Sentence Tones:</h2>
                          <div className="SentenceResults">
                                <div id="SentenceReturn"><h4>Click and hold sentences to see the value of emotion:</h4>{sentences}</div>
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

//  Maps all the tones of each sentence into an array.

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
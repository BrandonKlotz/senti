import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions';

import "font-awesome/css/font-awesome.css";
class Modal extends React.Component {
  render() {
    // Render nothing if not true
    if(!this.props.isModalOpen) {
      return null;
    } 
    // otherwise show the correct modal!
    if (this.props.modal === "ABOUT"){
      return (
        <div className = "modalContainer">
          <div className="modalBackground">
            <div className="modalHeader" onClick={this.props.closeModal}>
              <span><h1>About Senti</h1></span>
              <span><i className="fa fa-times fa-2x" aria-hidden="true"></i></span>
            </div>
            <div className="modalText">
              <h3>Senti is a sentiment analysis app to assist you in writing professional messages.</h3>  
              <p>Paste or type your text into the free web app and hit the ANALYZE button.</p>
              <p>Senti uses the IBM Watson Tone Analyzer API to detect language and emotional tones in your email or text message.</p>
              <p>Watson was used last year to measure the emotional tones projected by each candidate in the series of presidential debates.</p>
              <p>In Senti, messages are examined to see if they use confident or analytical language and whether the tone conveyed is happy, sad, apprehensive, or angry.</p>
              <p>Tone is an important component of business communication that is easily overlooked. Most of us use spelling and grammar checkers but do not consider if our tone is professional.</p>
              <p>People are much more likely to perceive negative emotions with greater intensity than they do positive emotions.</p>
              <p>To ensure the tone of your message is positive and professional, Senti does both an overall document analysis and a sentence-by-sentence review.</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className = "modalContainer">
          <div className="modalBackground">
            <div className="modalHeader" onClick={this.props.closeModal}>
              <span><h1>Contact Us</h1></span>
              <span><i className="fa fa-times fa-2x" aria-hidden="true"></i></span>
            </div>
            <div className="modalText">
              <h3>Senti is the React/Redux final group project for the Grand Circus Facebook<super>*</super> Bootcamp in Grand Rapids.</h3>
              <h3>Group members participating on the Senti project:</h3>
              <ul>
                <li><a href="https://github.com/BrandonKlotz">Brandon Klotz</a></li>
                <li><a href="https://github.com/HollyJHuber">Holly J. Huber</a></li>
                <li><a href="https://github.com/josephrossparks">Joseph Parks</a></li>
                <li><a href="https://github.com/keebarber">Keenan Barber</a></li>
              </ul>
              <p><super>*</super> The Grand Circus Facebook Bootcamp is an intensive front-end developer coding bootcamp funded through a grant from Facebook.</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.isModalOpen,
    modal: state.modal
  };
};

const mapActionsToProps = {
  closeModal
};

export default connect(mapStateToProps, mapActionsToProps)(Modal);

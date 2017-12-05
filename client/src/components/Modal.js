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
            <div className="border">
              <div className="modalHeader" onClick={this.props.closeModal}>
                <h1>About Senti</h1>
                <span><i className="fa fa-times fa-2x" aria-hidden="true"></i></span>
              </div>
              <div className="modalText">
                <p><strong>Senti is a sentiment analysis app to assist you in writing professional messages.</strong></p>
                <p>Paste or type your text into the free web app and hit the ANALYZE button.</p>
                <p>Senti uses the IBM Watson Tone Analyzer API to detect language and emotional tones in your email or text message.</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if(this.props.modal === "CONTACT"){
      return (
        <div className = "modalContainer">
          <div className="modalBackground">
            <div className="border">
              <div className="modalHeader" onClick={this.props.closeModal}>
                <h1>Contact Us</h1>
                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
              </div>
              <div className="modalText">
                <p><strong>Senti is the React/Redux final group project for the Grand Circus Facebook<super>*</super> Bootcamp in Grand Rapids.</strong></p>
                <p><strong>Group members participating on the Senti project:</strong></p>
                <ul>
                  <li><a href="https://github.com/BrandonKlotz">Brandon Klotz</a></li>
                  <li><a href="https://github.com/HollyJHuber">Holly J. Huber</a></li>
                  <li><a href="https://github.com/josephrossparks">Joseph Parks</a></li>
                  <li><a href="https://github.com/keebarber">Keenan Barber</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else{
     return (
        <div className = "modalContainer">
          <div className="modalBackgroundAlert">
            <div className="border">
              <div className="modalHeaderAlert" onClick={this.props.closeModal}>
                <i class="fa fa-exclamation-triangle fa-2x" aria-hidden="true"></i><h1>ALERT</h1>
                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
              </div>
              <div className="modalText">
                <p><strong>Not enough information to analyze any emotions.
                <br />Please provide at least 2 sentences.</strong></p>
              </div>
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

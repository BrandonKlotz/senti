import React from 'react';
import PropTypes from 'prop-types';
import "font-awesome/css/font-awesome.css";


class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="modalBackground">
        <div className="modalHeader" onClick={this.props.onClose}>
          <span><h1> Senti</h1></span>
          <span><i className="fa fa-times fa-2x" aria-hidden="true"></i></span>
        </div>
        <div className="modalText">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
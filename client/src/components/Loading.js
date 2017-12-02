import React, { Component } from 'react';

class Loader extends Component {
  render() {
        return (
            <div className="Loader">
                <div className="sequence">
                    <div className="loadingAnimation"></div>
                </div>
            </div>
        );
    }
  }


export default Loader;

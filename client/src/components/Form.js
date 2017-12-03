import React, { Component } from 'react';
import { connect } from 'react-redux';


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text
		};
	}

	render() {

		return (
			<div className="container form">
	      <form onSubmit={this.handleSubmit} className="form">
	          <textarea
	            onChange={this.handleText}
	            value={this.state.text}
	            placeholder="Enter a few sentences here to analyze."
	            defaultValue={this.props.text}>
	          </textarea>
						<input type="submit" value="Analyze" onClick={this.handleSubmit} className="Button" />
	      </form>
			</div>
		);
	}

	handleText = (event) => {
		this.setState({
			text: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();

		if(this.state.text === "" || this.state.text.length < 12) {
			alert('Please enter at least 2 sentences'); // This should be a modal
			return;
		}

		this.props.onSubmit({
			text: this.state.text,
		});
	}
}

const mapStateToProps = (state) => {
  return {
    text: state.text
  };
};

export default connect(mapStateToProps, null)(Form);

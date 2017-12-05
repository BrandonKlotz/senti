import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { modalAlert } from '../actions';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value,
			text: this.props.value,
			isTextAnalyzed: this.props.isTextAnalyzed
		};
	}

	render() {
		return (
			<div className="container form">
	  		<form onSubmit={this.handleSubmit} className="form">
	    		<textarea
	      		onChange={this.handleText}
	      		value={this.state.value}
	      		placeholder="Enter a few sentences here to analyze."
	      		defaultValue={this.props.value}>
	   		 </textarea>
				 <input
				 	type="submit"
				 	value={this.state.isTextAnalyzed ? "Re-analyze": "Analyze"}
				 	onClick={this.handleSubmit}
				 	className="Button" />
	  		</form>

				<div>
					{this.state.isTextAnalyzed ?
						<CopyToClipboard text={this.state.value} onCopy={() => this.setState({copied: true})}>
						<input type="button" value="Copy to clipboard with button" className="Button" />
						</CopyToClipboard> : null}
					{this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
				</div>
			</div>
		);
	}

	handleText = (event) => {
		({target: {value}}) => this.setState({value, copied: false})

		this.setState({
			value: event.target.value,
			text: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();

		if(this.state.value === "" || this.state.value.length < 18) {
			console.log ("modal alert");
			this.props.modalAlert();
			return
		}

		this.props.onSubmit({
			text: this.state.value,
			value: this.state.value,
			isTextAnalyzed: true
		});
	}
}

const mapActionsToProps = {
  modalAlert
};

const mapStateToProps = (state) => {
  return {
    value: state.value,
		text: state.value,
		isTextAnalyzed: state.isTextAnalyzed
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Form);

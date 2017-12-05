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

if (!this.props.stillNegative){
		return (
			<div className="container form">
	  		<form onSubmit={this.handleSubmit} className="form">
	    		<textarea
	      		onChange={this.handleText}
	      		value={this.state.value}
	      		placeholder="Enter a few sentences here to analyze."
						>
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
						<input type="button" value="Copy to Clipboard" className="Button clipboard" />
						</CopyToClipboard> : null}
					{this.state.copied ? <div className="copyMessage"><span>Copied.</span></div> : null}
				</div>
			</div>
		);

} else {

	return (
	<div className="container form">
	      		<form onSubmit={this.handleSubmit} className="form">
	          		<textarea
	            		onChange={this.handleText}
	            		value={this.state.value}
	            		placeholder="Enter a few sentences here to analyze."
	            		>
	         		 </textarea>
							 <input type="submit" value="Analyze" onClick={this.handleSubmit} className="Button" />
	      		</form>
	      	</div>
	      	);
}
}
	handleText = (event) => {

		this.setState({
			value: event.target.value,
			text: event.target.value,
			copied: false
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
		isTextAnalyzed: state.isTextAnalyzed,
		stillNegative: state.stillNegative
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Form);

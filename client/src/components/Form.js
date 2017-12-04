import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { modalAlert } from '../actions';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value,
			text: this.props.value
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
							 <input type="submit" value="Analyze" onClick={this.handleSubmit} className="Button" />
	      		</form>

				<div>
					<CopyToClipboard text={this.state.value}
							onCopy={() => this.setState({copied: true})}>
							<input type="button" value="Copy to clipboard with button" className="Button" />
					</CopyToClipboard>
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

		if(this.state.value === "" || this.state.value.length < 12) {
			console.log ("modal alert");
				this.props.modalAlert();
			//alert('Please enter at least 2 sentences'); // This should be a modal
			return;
		}

		this.props.onSubmit({
			text: this.state.value,
			value: this.state.value
		});
	}
}

const mapActionsToProps = {
  modalAlert
};

const mapStateToProps = (state) => {
  return {
    value: state.value,
		text: state.value
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Form);

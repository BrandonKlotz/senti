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
			<div className= "container">
	      		<form onSubmit={this.handleSubmit.bind(this)} className="form">
	          		<textarea
	            		onChange={this.handleText.bind(this)}
	            		value={this.state.text}
	            		placeholder="Type or paste your email here…"
	            		defaultValue={this.props.text}>
	          		</textarea>
					<input type="submit" value="Analyze" onClick={this.handleSubmit.bind(this)} className="Button" />
	      		</form>
			</div>
		);
	}

	handleText(event) {
		this.setState({
			text: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		if(this.state.text === "") {
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

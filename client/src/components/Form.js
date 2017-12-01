import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			loading: false
		};
	}

	render() {

		return (
			<div>

	      <form onSubmit={this.handleSubmit.bind(this)} className="form">
	        <h1>The Professional Email Checker.</h1>
	          <textarea
	            onChange={this.handleText.bind(this)}
	            value={this.state.text}
	            placeholder="Enter a few sentences here to analyze.">
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
		console.log(this.state.loading);
		this.props.onSubmit({
			text: this.state.text,
			loading: !this.state.loading
		});
		console.log(this.state.loading);
	}

}


export default Form;

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
			<div>

				<div className="container">
					<div className="splash">
						<h2>The Professional Email Checker.</h2>
						<p>Type or paste your email. We'll look for overall tones and give helpful suggestions on where to edit.</p>
					</div>
				</div>

	      <form onSubmit={this.handleSubmit.bind(this)} className="form">
	          <textarea
	            onChange={this.handleText.bind(this)}
	            value={this.state.text}
	            placeholder="Enter a few sentences here to analyze."
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

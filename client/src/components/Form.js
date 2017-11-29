import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		};
	}

	render() {
		return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form">
        <h1>The Profesional Email Checker.</h1>
          <textarea
            className='f-input-2'
            onChange={this.handleText.bind(this)}
            value={this.state.text}
            placeholder="Document Body...">
          </textarea>
					<input type="submit" value="Analyze" onClick={this.handleSubmit.bind(this)} className="Button" />
      </form>
		);
	}

	handleText(event) {
		this.setState({
			text: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.onSubmit({
			text: this.state.text
		});
	}

}


export default Form;

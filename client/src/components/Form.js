import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			toggleModal: false

		};
	}

	render() {

		return (
<<<<<<< HEAD
			<div>

	      <form onSubmit={this.handleSubmit.bind(this)} className="form">
	        <h1>The Profesional Email Checker.</h1>
	          <textarea
	            className='f-input-2'
	            onChange={this.handleText.bind(this)}
	            value={this.state.text}
	            placeholder="Enter a few sentences here to analyze.">
	          </textarea>
						<input type="submit" value="Analyze" onClick={this.handleSubmit.bind(this)} className="Button" />
	      </form>
			</div>
=======
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
>>>>>>> origin/server-clean
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
<<<<<<< HEAD
			this.setState({
				toggleModal: !this.state.toggleModal,
			});
=======
			alert('Hey please enter at least 2 senteces for me to analyze! :D');
>>>>>>> origin/server-clean
			return
		}

		this.props.onSubmit({
			text: this.state.text
		});
	}

}


export default Form;
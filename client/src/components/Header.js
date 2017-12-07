import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";
import { goToHome, modalAbout, modalContact, insertSampleText } from "../actions";
import { connect } from "react-redux";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sampleText: this.props.sampleText
		};
	}

	render() {
		//Explanded header = Tablet and Larger, Dropdown = Mobile
		return (
			<header>
				<div className="logoarea">
					<div className="logo" onClick={this.props.goToHome} />
					<div id="logotype">Senti</div>
				</div>

				<div>
					<select  value={this.state.sampleText} onChange={this.handleSampleChange}>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
						<option value="4">Sample 4</option>
						<option value="5">Sample 5</option>
						<option value="6">Sample 6</option>
					</select>
				</div>

				<div className="ExpandedNavigation">
					<a onClick={this.props.modalAbout}>About</a>
					<a onClick={this.props.modalContact}>Contact</a>
				</div>

				<div className="dropdown">
					<button
						onClick={this.myFunction.bind(this)}
						className="dropbtn fa fa-bars fa-lg"
					/>
					<div id="myDropdown" className="dropdown-content">
						<a onClick={this.props.modalAbout}>About</a>
						<a onClick={this.props.modalContact}>Contact</a>
					</div>
				</div>
			</header>
		);
	}

	handleSampleChange = (event) => {

		this.props.insertSampleText(event.target.value);
		this.setState({
			sampleText: event.target.value
		});
		console.log(event.target.value);
		console.log(this.state.sampleText)
	};

	myFunction(event) {
		document.getElementById("myDropdown").classList.toggle("show");
	}
}

const mapActionsToProps = {
	goToHome,
	modalAbout,
	modalContact,
	insertSampleText
};

const mapStateToProps = (state) => {
	return {
    		sampleText: state.sampleText
	};
};

export default connect(mapStateToProps, mapActionsToProps)(Header);

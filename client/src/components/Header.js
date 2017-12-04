import React, { Component } from 'react';
import "font-awesome/css/font-awesome.css";
import { goToHome, modalAbout, modalContact } from '../actions';
import { connect } from 'react-redux';
import Modal from './Modal';
 
class Header extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     isOpen: false
  //   };
  // }

  // toggleModal = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render() {

  	//Explanded header = Tablet and Larger, Dropdown = Mobile

    return(
   		<header>
        <div className="logo" onClick={this.props.goToHome}>
        </div>
        <div id="logotype">Senti</div>
   			<div className="ExpandedNavigation">
   				<a>Home</a>
					<a onClick={this.props.modalAbout}>About</a>
					<a onClick={this.props.modalContact}>Contact</a>
				</div>

        <div className="dropdown">
          <button onClick={this.myFunction.bind(this)} className="dropbtn fa fa-bars fa-lg"></button>
          <div id="myDropdown" className="dropdown-content">
          	<a href="#">Home</a>
          	<a href="#">About</a>
          	<a href="#">Contact</a>
          </div>
        </div>
	   	</header>
    );
  }

  myFunction(event) {
      document.getElementById("myDropdown").classList.toggle("show");
  };
}

const mapActionsToProps = {
  goToHome,
  modalAbout,
  modalContact
};

export default connect(null, mapActionsToProps)(Header);

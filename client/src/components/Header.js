import React, { Component } from 'react';
import "font-awesome/css/font-awesome.css";
import Modal from './Modal';


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

  	//Explanded header = Tablet and Larger, Dropdown = Mobile

    return(
   		<header>
        <div className="logo">
        </div>
        <div className = "modalMenu">
          <Modal 
            className={"modalWindow"}
            show={this.state.isOpen}
            onClose={this.toggleModal}>
              <h3>Senti is a sentiment analysis app to assist you in writing professional emails.</h3>
            </Modal>
          </div>
   				<div className="ExpandedNavigation">
   					<a>Home</a>
					<a onClick={this.toggleModal}>About</a>
					<a>Contact</a>
				</div>

				<div className="dropdown">
					<button onClick={this.myFunction.bind(this)} className="dropbtn fa fa-bars fa-lg"></button>

					  <div id="myDropdown" className="dropdown-content">
					    <a>Home</a>
					    <a onClick={this.toggleModal}>About</a>
					    <a>Contact</a>
					  </div>
				</div>

	   	</header>
    );
  }

 myFunction(event) {
    document.getElementById("myDropdown").classList.toggle("show");
};
}



export default Header;

import React, { Component } from 'react';
import Modal from './Modal';
import "font-awesome/css/font-awesome.css";


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

    return(
   		<header>

   			<img src='./img/logo.png' alt="Logo" />
				<div className="dropdown">
          <button onClick={this.toggleModal}>Open Modal</button>
					<button onClick={this.myFunction.bind(this)} className="dropbtn fa fa-bars fa-lg"></button>

					  <div id="myDropdown" className="dropdown-content">
					    <a href="#">Home</a>
					    <a href="#">About</a>
					    <a href="#">Contact</a>

					  </div>
            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>
            Here's some content for the Modal
            </Modal>
				</div>

	   	</header>
    );
  }

 myFunction(event) {
    document.getElementById("myDropdown").classList.toggle("show");
};
}



export default Header;

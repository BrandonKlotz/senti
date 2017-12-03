import React, { Component } from 'react';
import "font-awesome/css/font-awesome.css";
import { goToHome } from '../actions';
import { connect } from 'react-redux';


class Header extends Component {

  render() {

  	//Explanded header = Tablet and Larger, Dropdown = Mobile

    return(
   		<header>
        <div className="logo" onClick={this.props.goToHome}>
        </div>

   				<div className="ExpandedNavigation">
   					<a href="#">Home</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
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
  goToHome
};

export default connect(null, mapActionsToProps)(Header);

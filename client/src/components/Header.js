import React, { Component } from 'react';
import "font-awesome/css/font-awesome.css";


class Header extends Component {

  render() {

    return(
   		<header className="HeaderBar">
   			<h1>Senti</h1>
        <i className="fa fa-bars fa-lg"></i>
   		</header>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import "font-awesome/css/font-awesome.css";


class Header extends Component {

  render() {

    return(
   		<header className="HeaderBar">
   			<h1>Senti</h1>

				<div class="dropdown">
					<button onClick={this.myFunction.bind(this)} class="dropbtn fa fa-bars fa-lg"></button>
					 
					  <div id="myDropdown" class="dropdown-content">
					    <a href="#">Home</a>
					    <a href="#">About</a>
					    <a href="#">Contact</a>

					  </div>
				</div>
	   		</header>
    );
  }


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
 myFunction(event) {
    document.getElementById("myDropdown").classList.toggle("show");
};

// Close the dropdown if the user clicks outside of it
//  window.onclick = function(event) {
//    if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
// //       }
//     }
//   }
// };
}



export default Header;

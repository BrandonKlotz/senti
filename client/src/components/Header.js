import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";
import { goToHome, modalAbout, modalContact } from "../actions";
import { connect } from "react-redux";

class Header extends Component {
    render() {
        //Explanded header = Tablet and Larger, Dropdown = Mobile
        return (
            <header>
                <div className="logoarea">
                    <div className="logo" onClick={this.props.goToHome} />
                    <div id="logotype">Senti</div>
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

    myFunction(event) {
        document.getElementById("myDropdown").classList.toggle("show");
    }
}

const mapActionsToProps = {
    goToHome,
    modalAbout,
    modalContact
};

export default connect(null, mapActionsToProps)(Header);

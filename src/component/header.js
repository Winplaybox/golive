import React, { Component } from 'react';
import { Link } from "react-router-dom";
import InnerHeader from './innerheader'
class Header extends Component {
  render() {
    return (
        <>
        <InnerHeader/>
        <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary" id="header">
        <div className="mdl-layout--large-screen-only mdl-layout__header-row mobilenone">
    </div>
    <div className="mdl-layout--large-screen-only mdl-layout__header-row mobilenone" id="headi">
        <Link to={{ pathname: "/portfolio" }} title="Sagar Mistry" rel="home"><h3>Sagar Mistry</h3></Link>
		<div className="downloadimage">
			<img src="https://lh3.googleusercontent.com/-2gKs8y2mQ3k/AAAAAAAAAAI/AAAAAAAAAgs/rSNK9GTVy80/s150/photo.jpg" className="circle responsive-img" alt='ownprofile'/>
            <a className="btn-floating btn-large waves-effect waves-light blue darken-4 modal-trigger tooltipped" data-position="bottom" data-delay="50" data-tooltip="Get my custom size passport image" href="#modal1"><i className="material-icons">file_download</i></a>
			
		</div>
    </div>
    <div className="mdl-layout--large-screen-only mdl-layout__header-row mobilenone">
		
    </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
          <Link to={{ pathname: "/" }} className="mdl-layout__tab is-active">Overview</Link>
          <Link to={{ pathname: "designs" }} className="mdl-layout__tab">Designs</Link>
          <Link to={{ pathname: "aboutme" }} className="mdl-layout__tab">About me</Link>
          <Link to={{ pathname: "resume" }} className="mdl-layout__tab">Resume</Link>
          <Link to={{ pathname: "education" }} className="mdl-layout__tab">Education</Link>
          <Link to={{ pathname: "contact" }} className="mdl-layout__tab">Contact</Link>
          <a className="tooltipped mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent blue darken-4" id="add" href="tel:+917387322548" data-position="bottom" data-delay="50" data-tooltip="Let's Get in Touch">
            <i className="material-icons" role="presentation">phone</i>
            <span className="visuallyhidden">phone</span>
        </a>
          
        </div>
      </header>
      </>
    );
  }
}

export default Header;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <>
      <footer className="mdl-mega-footer">
      <div className="mdl-mega-footer--middle-section center container ">
        <h3>LET'S SOCIALIZE</h3>
<h5>I'm very social and I'd love to hear from you! Feel free to send me an email, find me on Google Plus, follow me on Twitter and join me on Facebook.</h5>
      </div>
      <div className="mdl-mega-footer--bottom-section center">
      <Link to={{ pathname: "https://www.facebook.com/sagar.mistry.54" }} className="tooltipped btn-floating btn-large waves-effect waves-light blue  darken-4" target="_blank" data-position="top" data-delay="50" data-tooltip="Add me"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
      <Link to={{ pathname: "https://twitter.com/SagarMistry1994" }} className="tooltipped btn-floating btn-large waves-effect waves-light blue" target="_blank" data-position="top" data-delay="50" data-tooltip="Follow me"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
      <Link to={{ pathname: "https://www.linkedin.com/in/sagar-mistry-530/" }} className="tooltipped btn-floating btn-large waves-effect waves-light blue  darken-2" target="_blank" data-position="top" data-delay="50" data-tooltip="Connnect with me"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
      
      </div>
      <div id="copyright">
        &copy; 2020 Portfolio
        </div>
    </footer>
    <a href="mailto:sagarsuthar530@gmail.com" id="view-source" className="tooltipped mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--accent mdl-color-text--accent-contrast red darken-4 btn" data-position="top" data-delay="50" data-tooltip="Let's Get in Touch"><i className="material-icons left">email</i>Mail</a>
</>
    );
  }
}

export default Footer;
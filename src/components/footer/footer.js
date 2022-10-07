import { Link } from "react-router-dom";
import { Component } from "react";

import footerLogo from "../../assets/icons/coffee-beans-logo-black.svg";

import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer__wrapper">
          <li className="footer-item">
            <img src={footerLogo} alt="coffee-beans" />
            <Link className="footer-item__label" to="/">
              Coffee house
            </Link>
          </li>
          <li className="footer-item">
            <Link className="footer-item__label" to="/our-coffee">
              Our coffee
            </Link>
          </li>
          <li className="footer-item">
            <Link className="footer-item__label" to="/pleasure">
              For your pleasure
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;

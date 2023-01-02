import { Link } from "react-router-dom";
import { memo } from "react";

import footerLogo from "../../assets/icons/coffee-beans-logo-black.svg";

import "./footer.scss";

const Footer = memo(() => {
  return (
    <footer className="footer">
      <ul className="footer__wrapper">
        <li className="footer-item">
          <img src={footerLogo} alt="coffee-beans" />
          <Link className="footer-item__label" to="/coffee-shop-project">
            Coffee house
          </Link>
        </li>
        <li className="footer-item">
          <Link className="footer-item__label" to="/coffee-shop-project/our-coffee">
            Our coffee
          </Link>
        </li>
        <li className="footer-item">
          <Link className="footer-item__label" to="/coffee-shop-project/pleasure">
            For your pleasure
          </Link>
        </li>
      </ul>
    </footer>
  );
})

export default Footer;

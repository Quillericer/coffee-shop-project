import { Link } from "react-router-dom";
import { memo } from "react";

import headerLogo from "../../assets/icons/coffee-beans-logo.svg";

import "./header.scss";

const Header = memo(() => {
  return (
    <header className="header">
      <ul className="header__wrapper">
        <li className="header-item">
          <img src={headerLogo} alt="coffee-beans" />
          <Link className="header-item__label" to="/">
            Coffee house
          </Link>
        </li>
        <li className="header-item">
          <Link className="header-item__label" to="/our-coffee">
            Our coffee
          </Link>
        </li>
        <li className="header-item">
          <Link className="header-item__label" to="/pleasure">
            For your pleasure
          </Link>
        </li>
      </ul>
    </header>
  );
})

export default Header;

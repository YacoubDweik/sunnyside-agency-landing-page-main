import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-hamburger.svg";
import { useState } from "react";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <header className={isExpanded ? "header active" : "header"}>
      <span className="header__arrow"></span>
      <img className="header__logo" src={logo} alt="Sunnyside logo" />
      <button
        className="nav__button"
        type="button"
        id="headerMenu"
        aria-haspopup="true"
        aria-controls="menu1"
        aria-expanded={isExpanded}
        onClick={handleClick}
      >
        <img src={menuIcon} alt="click to open the navigation menu" />
      </button>
      <nav className="header__nav">
        <ul className="nav__list" id="headerMenu" role="menu" aria-label="click to open the navigation menu">
          <li className="list__item" role="none">
            <a className="item__link" href="#" role="menuitem" tabIndex={isExpanded ? 0 : -1}>
              About
            </a>
          </li>
          <li className="list__item" role="none">
            <a className="item__link" href="#" role="menuitem" tabIndex={isExpanded ? 0 : -1}>
              Services
            </a>
          </li>
          <li className="list__item" role="none">
            <a className="item__link" href="#" role="menuitem" tabIndex={isExpanded ? 0 : -1}>
              Projects
            </a>
          </li>
          <li className="list__item" role="none">
            <a className="item__link" href="#" role="menuitem" tabIndex={isExpanded ? 0 : -1}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

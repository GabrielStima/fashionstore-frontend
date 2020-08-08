import React from "react";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import "./styles.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-container-logo" />
      <nav className="header-container-menu">
        <ul>
          <li>Masculino</li>
          <li>Feminino</li>
          <li>Teen</li>
          <li>Infantil</li>
          <li>Destaques</li>
          <li>Ofertas</li>
        </ul>
      </nav>
      <div className="header-container-icons">
        <FaSearch size="20px" className="header-container-icon" />
        <FaUserAlt size="20px" className="header-container-icon" />
        <span className="header-container-icons-separate" />
        <FiShoppingBag size="20px" className="header-container-icon" />
      </div>
    </div>
  );
}

export default Header;

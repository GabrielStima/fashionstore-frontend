import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import Badge from "@material-ui/core/Badge";
import "./styles.css";

function Header({ showAlertRefresh }) {
  const [numberBag, setNumberBag] = useState(0);

  useEffect(() => {
    const refreshNumber = window.sessionStorage.getItem("sessionProducts");
    if (refreshNumber) {
      setNumberBag(refreshNumber.split(",").length);
    } else {
      setNumberBag(0);
    }
  }, [showAlertRefresh]);

  return (
    <div className="header-container">
      <Link to="/">
        <h1>
          <div className="header-container-logo" />
        </h1>
      </Link>
      <nav className="header-container-menu">
        <ul>
          <Link to="/masculino">
            <li>Masculino</li>
          </Link>
          <Link to="/feminino">
            <li>Feminino</li>
          </Link>
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
        <Link to="/bag">
          <Badge badgeContent={numberBag} color="primary">
            <FiShoppingBag
              size="20px"
              className="header-container-icon bag-icon"
            />
          </Badge>
        </Link>
      </div>
    </div>
  );
}

export default Header;

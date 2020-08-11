import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ListItem = ({ item }) => (
  <div className="grid-list-item item-effect">
    <Link to={`/item/${item._id}`} className="grid-list-item-link">
      <div
        className="grid-list-item-img"
        style={{ backgroundImage: `url(${item.img})` }}
      />
      <div className="grid-list-item-text">
        <p className="grid-list-item-title">
          {item.title} POR {item.value}
        </p>
        <p className="grid-list-item-action">CONFERIR</p>
      </div>
    </Link>
  </div>
);

export default ListItem;

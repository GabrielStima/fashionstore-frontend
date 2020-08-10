import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import bannerService from "../../services/bannerService";
import productService from "../../services/productService";

import "./styles.css";

function ListProduct({ props }) {
  const [banner, setBanner] = useState("");
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const request = async () => {
      const result = await productService.getListProductByCategory(
        props.category
      );
      setListProduct(result.data);
    };
    request();
  }, [props]);

  useEffect(() => {
    const request = async () => {
      const result = await bannerService.getBanner(props.location.pathname);
      setBanner(result.data.img);
    };
    request();
  }, [props]);

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

  return (
    <div>
      <div
        className="secondary-banner"
        style={{ backgroundImage: `url(${banner})` }}
      />
      <div className="grid-list-cotainer">
        <p>XXX Resultados</p>
        <div className="grid-list">
          {listProduct.map((el, index) => (
            <ListItem item={el} key={index} />
          ))}
        </div>
        <div className="grid-list-pagination">
          <Pagination count={10} size="large" />
        </div>
      </div>
    </div>
  );
}

export default ListProduct;

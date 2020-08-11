import React, { useEffect, useState } from "react";
import ListItem from "../../components/ListItem";
import Pagination from "@material-ui/lab/Pagination";
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

  return (
    <div>
      <div
        className="secondary-banner"
        style={{ backgroundImage: `url(${banner})` }}
      />
      <div className="grid-list-container">
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

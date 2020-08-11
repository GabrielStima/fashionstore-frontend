import React, { useEffect, useState } from "react";
import productService from "../../services/productService";
import "./styles.css";

function ItemBag({ id, index, refresh, callbackAlert }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    const request = async () => {
      const result = await productService.getProductById(id);
      setItem(result.data);
    };
    request();
  }, [id]);

  const removeItem = (index) => {
    let arrayItems = window.sessionStorage.getItem("sessionProducts");
    arrayItems = arrayItems.split(",");
    arrayItems.splice(index, 1);

    window.sessionStorage.setItem("sessionProducts", arrayItems);
    callbackAlert("error", "Produto excluido com sucesso");
    refresh();
  };

  return (
    <div className="item-bag-container">
      <div
        className="item-bag-img"
        style={{ backgroundImage: `url(${item.img})` }}
      />
      <div className="item-bag-info">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p className="item-bag-info-value">{item.value}</p>
        <p className="item-bag-button-remove" onClick={() => removeItem(index)}>
          REMOVER
        </p>
      </div>
    </div>
  );
}

export default ItemBag;

import React, { useEffect, useState } from "react";
import productService from "../../services/productService";
import "./styles.css";

function InfoProduct({ props, callbackAlert }) {
  const [item, setItem] = useState("");

  useEffect(() => {
    const request = async () => {
      const result = await productService.getProductById(props.match.params.id);
      setItem(result.data);
    };
    request();
  }, [props]);

  const addProductBag = (id) => {
    let sessionProducts = window.sessionStorage.getItem("sessionProducts");

    if (sessionProducts) {
      sessionProducts = `${sessionProducts},${id}`;
      window.sessionStorage.setItem("sessionProducts", sessionProducts);
    } else {
      window.sessionStorage.setItem("sessionProducts", id);
    }

    callbackAlert("success", "Produto adicionado com sucesso");
  };

  return (
    <div className="info-product-container">
      <div
        className="info-product-item item-img"
        style={{ backgroundImage: `url(${item.img})` }}
      />
      <div className="info-product-item info-product">
        <div className="info-product-wrap">
          <h3 className="info-product-title">{item.title}</h3>
          <p className="info-product-value">{item.value}</p>
          <ul className="info-product-sizes">
            {item && (
              <React.Fragment>
                {item.size.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </React.Fragment>
            )}
          </ul>
          <p
            className="info-product-sale-button"
            onClick={() => addProductBag(item._id)}
          >
            Adicionar ao carrinho
          </p>
        </div>
      </div>
      <div className="info-product-item info-description">
        <h3 className="info-description-title">Descrição</h3>
        <p className="info-description-text">{item.description}</p>
      </div>
      <div
        className="info-product-item item-img"
        style={{ backgroundImage: `url(${item.img})` }}
      />
    </div>
  );
}

export default InfoProduct;

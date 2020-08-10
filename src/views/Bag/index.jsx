import React, { useEffect, useState } from "react";
import Step from "../../components/Steps";
import productService from "../../services/productService";
import "./styles.css";

const ItemBag = ({ id, index, refresh }) => {
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
};

function Bag() {
  const [itemsInBag, setItemsInBag] = useState([]);
  const [total, setTotal] = useState("R$ 0,00");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let arrayItems = window.sessionStorage.getItem("sessionProducts");
    if (arrayItems) {
      setItemsInBag(arrayItems.split(","));
    }
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };

  const gridItems = () => (
    <div>
      {itemsInBag.map((el, index) => (
        <ItemBag key={index} id={el} index={index} refresh={handleRefresh} />
      ))}
      <p className="bag-total">Total: {total}</p>
    </div>
  );

  return (
    <div className="bag-container">
      <div className="bag-steps-container">
        <Step arraySteps={["1", "2", "3"]} arrayContent={[gridItems]} />
      </div>
    </div>
  );
}

export default Bag;

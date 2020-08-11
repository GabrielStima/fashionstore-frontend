import React, { useEffect, useState } from "react";
import ItemBag from "../ItemBag";
import "./styles.css";

function ItensBag(callbackAlert) {
  const [total, setTotal] = useState("R$ 0,00");
  const [refresh, setRefresh] = useState(false);
  const [itemsIdInBag, setItemsIdInBag] = useState([]);

  useEffect(() => {
    let arrayItems = window.sessionStorage.getItem("sessionProducts");
    if (arrayItems) {
      setItemsIdInBag(arrayItems.split(","));
    } else {
      setItemsIdInBag([]);
    }
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };

  return (
    <div>
      {itemsIdInBag.map((el, index) => (
        <ItemBag
          key={index}
          id={el}
          index={index}
          refresh={handleRefresh}
          callbackAlert={callbackAlert}
        />
      ))}
      {itemsIdInBag.length === 0 && (
        <p className="bag-total">Seu carrinho está vazio</p>
      )}
      <p className="bag-total">Total: {total}</p>
    </div>
  );
}

export default ItensBag;

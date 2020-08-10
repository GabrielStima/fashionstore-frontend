import React, { useEffect, useState } from "react";
import SectionGrid from "../SectionGrid";
import promotionService from "../../services/promotionService";

import "./styles.css";

function SectionPromotion({ promotion }) {
  const [title, setTitle] = useState("");
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    setTitle(promotion.title);
  }, [promotion]);

  useEffect(() => {
    const request = async () => {
      const result = await promotionService.getPromotionsByParent(
        promotion._id
      );

      setListProduct(result.data);
    };
    request();
  }, [promotion]);

  return (
    <section className="section-container">
      <div className="section-container-title">
        <hr className="section-line" />
        <h2 className="section-title">{title}</h2>
        <hr className="section-line" />
      </div>

      <SectionGrid listProduct={listProduct} />
    </section>
  );
}

export default SectionPromotion;

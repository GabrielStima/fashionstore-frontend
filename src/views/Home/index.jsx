import React, { useEffect, useState } from "react";
import SectionPromotion from "../../components/SectionPromotion";
import bannerService from "../../services/bannerService";
import promotionService from "../../services/promotionService";

import "./styles.css";

function Home() {
  const [banner, setBanner] = useState("");
  const [promotions, setPromotion] = useState([]);

  useEffect(() => {
    const request = async () => {
      const result = await bannerService.getBanner("/home");
      setBanner(result.data.img);
    };
    request();
  }, []);

  useEffect(() => {
    const request = async () => {
      const result = await promotionService.getHomePromotions();
      setPromotion(result.data);
    };
    request();
  }, []);

  return (
    <div>
      <div
        className="home-banner"
        style={{ backgroundImage: `url(${banner})` }}
      />
      {promotions.map((el, index) => (
        <SectionPromotion key={index} promotion={el} />
      ))}
    </div>
  );
}

export default Home;

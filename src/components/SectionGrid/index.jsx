import React from "react";
import "./styles.css";

const PrincipalItem = ({ item }) => (
  <div className="section-grid-principal section-effect">
    <div
      className="section-grid-principal-img"
      style={{ backgroundImage: `url(${item.img})` }}
    />
    <div className="section-grid-infos">
      <p className="section-grid-infos-title">{item.title}</p>
      <p className="section-grid-infos-action">CONFERIR</p>
    </div>
  </div>
);

const Item = ({ item }) => (
  <div className="section-grid-item section-effect">
    <div
      className="section-grid-item-img"
      style={{ backgroundImage: `url(${item.img})` }}
    />
    <div className="section-grid-infos">
      <p className="section-grid-infos-title">{item.title}</p>
      <p className="section-grid-infos-action">CONFERIR</p>
    </div>
  </div>
);

function SectionGrid({ listProduct }) {
  return (
    <div className="section-grid">
      {listProduct.map((el, index) => (
        <React.Fragment key={index}>
          {el.promotion_principal_item ? (
            <PrincipalItem item={el} />
          ) : (
            <Item item={el} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default SectionGrid;

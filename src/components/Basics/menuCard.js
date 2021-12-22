import React, {useState} from "react";
import "./style.css";

const MenuCard = ( {menuProp} ) => {
  return (
    <>
    <section className="main-card--cointainer">
    {menuProp.map((curElem) => {

      const { id, name, category,price, image, description} = curElem;

        return(
        <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{id}</span>
            <span className="card-author subtle">{category}</span>
            <h2 className="card-title"> {name} </h2>
            <span className="card-description subtle">
            {description}.
            </span>
            <div className="card-read">{price}</div>
          </div>
          <img src={image} alt="images" className="card-media"/>
          {/* <span className="card-tag subtle">Order Now</span> */}
        </div>
      </div>
        );
    })}
      </section>
    </>
  );
};

export default MenuCard;
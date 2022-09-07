import React from "react";
import "./Card.css";
function Card({ url, description, price }) {
  return (
    <div className="card">
      <img src={url} alt="" />
      <div className="card__info">
        <h1>{description}</h1>
        <p>{description}</p>
        <p>{price}$</p>
      </div>
    </div>
  );
}

export default Card;

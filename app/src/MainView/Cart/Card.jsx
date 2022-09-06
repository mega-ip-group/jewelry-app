import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="card">
      <img
        src="https://mave.co.il/wp-content/uploads/2022/05/%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%9C%D7%9C%D7%90-%D7%A9%D7%9D-2022-05-22T135427.605.png"
        alt=""
      />
      <div className="card__info">
        <h1>this is the title</h1>
        <p>description</p>
        <p>100$</p>
      </div>
    </div>
  );
}

export default Card;

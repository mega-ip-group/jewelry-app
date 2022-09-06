import React from "react";
import Card from "./Card";
function Cart() {
  return (
    <div className="cat">
      <button class="buy__now">Buy now</button>
      <label htmlFor="">total</label>
      <div className="cart__container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Cart;

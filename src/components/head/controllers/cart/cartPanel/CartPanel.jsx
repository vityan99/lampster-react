import React from "react";
import style from "./cartPanel.module.css";
import OrderButton from "../orderButton/OrderButton";
import CartItem from "../cartItem/CartItem";

function CartPanel({ open, products, deleteProductHandler }) {
  return (
    <div className={`${style["mini-cart-list-wrapper"]} ${open ? style["mini-cart-list-wrapper--active"] : ""}`}>
      <span className={style["mini-cart-list-wrapper__title"]}>Товары в корзине:</span>
      <div className={style["mini-cart-list"]}>
        {products.map(({ id, img, title, price, count }) => (
          <CartItem id={id} img={img} title={title} price={price} count={count} deleteProductHandler={deleteProductHandler} key={id} />
        ))}
      </div>
      <OrderButton />
    </div>
  );
}

export default CartPanel;

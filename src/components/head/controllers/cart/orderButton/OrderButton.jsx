import React from "react";
import style from "./orderButton.module.css";

function OrderButton() {
  return <button className={`${style.btn} ${style["btn--order"]}`}>Оформить заказ</button>;
}

export default OrderButton;

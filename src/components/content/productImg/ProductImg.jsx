import React from "react";
import style from "./productImg.module.css";

function ProductImg({ img, clickHandler }) {
  return <img className={style.product__img} alt="product" src={require(`../../../assets/img/${img}`)} onClick={clickHandler} />;
}

export default ProductImg;

import React from "react";
import style from "./productButton.module.css";

function ProductButton({ buttonTitle, id, img, title, price }) {
  const clickHandler = (e) => {
    const event = new CustomEvent("btnBuy", {
      bubbles: true,
      detail: {
        id,
        img,
        title,
        price,
      },
    });
    e.currentTarget.dispatchEvent(event);
  };

  return (
    <button className={`${style.btn} ${style["btn--buy"]}`} onClick={clickHandler}>
      {buttonTitle}
    </button>
  );
}

export default ProductButton;

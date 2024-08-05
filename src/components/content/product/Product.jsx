import React, { useState } from "react";
import style from "./product.module.css";
import ProductIconMore from "../productIconMore/ProductIconMore";
import ProductIconFavorite from "../productIconFavorite/ProductIconFavorite";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import ProductImg from "../productImg/ProductImg";
import ProductChoice from "../productChoice/ProductChoice";
import ProductButton from "../productButton/ProductButton";

function Product({
  id,
  title,
  price,
  priceType,
  description,
  properties,
  watts,
  colors,
  searchValue,
  popupImgClickHandler,
  popupSetImgData,
  popupDescClickHandler,
  popupSetDescData,
}) {
  const [color, setColor] = useState(1);
  const [watt, setWatt] = useState(1);
  const [favorite, setFavorite] = useState(false);

  const getWatts = (watt) => {
    const found = watts.find((el) => el.id === watt);
    return found ? found.text : null;
  };

  const setWattHandler = (id) => setWatt((current) => (current = id));
  const setColorHandler = (id) => setColor((current) => (current = id));

  const popupImgHandler = () => {
    popupImgClickHandler();
    popupSetImgData({ id: id, color: color });
  };

  const popupDescHandler = () => {
    popupDescClickHandler();
    popupSetDescData(properties);
  };

  const favoriteHandler = () => setFavorite((current) => !current);

  const highlightSearchValue = (title, searchValue) => {
    if (!searchValue) return title;

    const regex = new RegExp(`(${searchValue})`, "gi");
    const parts = title.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className={style["product__title-marker"]}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={style.product}>
      <div className={style.product__more}>
        <ProductIconMore icon={faAngleDoubleRight} clickHandler={popupDescHandler} />
      </div>
      <div className={style.product__favorite}>
        <ProductIconFavorite icon={favorite ? faStarSolid : faStarRegular} clicked={favorite} clickHandler={favoriteHandler} />
      </div>
      <div
        className={`${style["product__img-wrapper"]} 
                    ${style[`product__img-wrapper--light-${getWatts(watt)}`]}`}
      >
        {colors.map((el) => (el.id === color ? <ProductImg img={el.img} clickHandler={popupImgHandler} key={id} /> : null))}
      </div>
      <div className={style.product__content}>
        <h4 className={style.product__title}>{highlightSearchValue(title, searchValue)}</h4>
        <span className={style.product__price}>
          {price} {priceType}
        </span>

        <ProductChoice title={"Watt"} choice={watts} clickHanlder={setWattHandler} />
        <ProductChoice title={"Colors"} choice={colors} clickHanlder={setColorHandler} />
        <p className={style.product__description}>{description}</p>
        <div className={style.product__btn}>
          <ProductButton buttonTitle={"buy"} id={id} img={colors.find((el) => el.id === color).img} title={title} price={price} />
        </div>
      </div>
    </div>
  );
}

export default Product;

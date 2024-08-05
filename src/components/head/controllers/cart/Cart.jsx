import React, { useState, useEffect } from "react";
import style from "./cart.module.css";
import CartCalculate from "./cartCalculate/CartCalculate";
import CartIcon from "./cartIcon/CartIcon";
import CartPanel from "./cartPanel/CartPanel";

function Cart() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const openClickHandler = () => setOpen((current) => !current);

  const deleteProductHandler = (id) => {
    setProducts((current) => current.filter((product) => product.id !== id));
  };

  const totalPrice = products.reduce((acc, product) => acc + product.price * product.count, 0);
  const totalCount = products.reduce((acc, product) => acc + product.count, 0);

  useEffect(() => {
    const handleBtnBuy = (e) => {
      const newProduct = e.detail;
      setProducts((current) => {
        const existingProductIndex = current.findIndex((product) => product.id === newProduct.id);

        if (existingProductIndex !== -1) {
          const updatedProducts = [...current];
          updatedProducts[existingProductIndex] = {
            ...updatedProducts[existingProductIndex],
            count: updatedProducts[existingProductIndex].count + 1,
          };
          return updatedProducts;
        } else {
          return [...current, { ...newProduct, count: 1 }];
        }
      });
    };

    document.body.addEventListener("btnBuy", handleBtnBuy);
    return () => document.body.removeEventListener("btnBuy", handleBtnBuy);
  }, []);

  return (
    <>
      <div className={style["mini-cart"]}>
        <CartIcon clickHandler={openClickHandler} />
        <CartPanel open={open} products={products} deleteProductHandler={deleteProductHandler} />
      </div>
      <div className={style["cart-calc"]}>
        <CartCalculate price={totalPrice} count={totalCount} />
      </div>
    </>
  );
}

export default Cart;

import React from "react";
import style from "./app.module.css";
import Header from "../head/header/Header";
import Filter from "../filters/filter/Filter";
import ProductList from "../content/productList/ProductList";

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Filter />
      <ProductList />
    </div>
  );
}

export default App;

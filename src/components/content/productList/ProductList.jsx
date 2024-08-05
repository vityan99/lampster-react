import React, { useEffect, useState } from "react";
import style from "./productList.module.css";
import PopupImg from "../popupImg/PopupImg";
import PopupDesc from "../popupDesc/PopupDesc";
import Product from "../product/Product";

function ProductList() {
  const products = [
    {
      id: 1313,
      title: "Рабочая лампа на струбцине KD-312",
      price: 1148,
      priceType: "Руб.",
      description: "Рабочая лампа на струбцине KD-312 белого цвета служит для освещения рабочего места дома и в офисе.",
      properties: [
        {
          key: "price",
          text: "Цена",
          value: 1148,
          unit: "руб",
          groupType: 1,
        },
        {
          key: "width",
          text: "Ширина",
          value: 12.5,
          unit: "см",
          groupType: 1,
        },
        {
          key: "height",
          text: "Высота",
          value: 43,
          unit: "см",
          groupType: 1,
        },
        {
          key: "weight",
          text: "Вес",
          value: 2.449,
          unit: "кг",
          groupType: 1,
        },
        {
          key: "voltage",
          text: "Напряжение",
          value: 220,
          unit: "В",
          groupType: 2,
        },
        {
          key: "powerSupply",
          text: "Источник питания",
          value: 1,
          type: 1,
          unit: "",
          groupType: 2,
        },
        {
          key: "colorTemperature",
          text: "Температура свечения",
          value: 4000,
          unit: "в К",
          groupType: 2,
        },
      ],
      watts: [
        { id: 1, text: 14, unit: "wt" },
        { id: 2, text: 24, unit: "wt" },
        { id: 3, text: 34, unit: "wt" },
        { id: 4, text: 44, unit: "wt" },
        { id: 5, text: 54, unit: "wt" },
      ],
      colors: [
        { id: 1, text: "white", unit: "", img: "lamp_1_white.jpg" },
        { id: 2, text: "green", unit: "", img: "lamp_1_green.jpg" },
        { id: 3, text: "violet", unit: "", img: "lamp_1_violet.jpg" },
      ],
    },
    {
      id: 1300,
      title: "Настольная лампа светодиодная Эра LED-506-10W-W регулируемый",
      price: 997,
      priceType: "Руб.",
      description: "предназначена для установки на столе в рабочем кабинете, парте школьника. Оснащена широким и устойчивым основанием",
      properties: [
        {
          key: "price",
          text: "Цена",
          value: 997,
          unit: "руб",
          groupType: 1,
        },
        {
          key: "width",
          text: "Ширина",
          value: 13.5,
          unit: "см",
          groupType: 1,
        },
        {
          key: "height",
          text: "Высота",
          value: 100,
          unit: "см",
          groupType: 1,
        },
        {
          key: "weight",
          text: "Вес",
          value: 1.249,
          unit: "кг",
          groupType: 1,
        },
        {
          key: "voltage",
          text: "Напряжение",
          value: 12,
          unit: "В",
          groupType: 2,
        },
        {
          key: "powerSupply",
          text: "Источник питания",
          value: 2,
          type: 2,
          unit: "",
          groupType: 2,
        },
        {
          key: "colorTemperature",
          text: "Температура свечения",
          value: 5000,
          unit: "в К",
          groupType: 2,
        },
      ],
      watts: [
        { id: 1, text: 14, unit: "wt" },
        { id: 2, text: 24, unit: "wt" },
        { id: 3, text: 34, unit: "wt" },
      ],
      colors: [
        { id: 1, text: "white", unit: "", img: "lamp_2_white.jpg" },
        { id: 2, text: "black", unit: "", img: "lamp_2_black.jpg" },
      ],
    },
    {
      id: 1400,
      title: "Настольная лампа светодиодная Эра LED-506-10W-W регулируемый",
      price: 997,
      priceType: "Руб.",
      description: "предназначена для установки на столе в рабочем кабинете, парте школьника. Оснащена широким и устойчивым основанием",
      properties: [
        {
          key: "price",
          text: "Цена",
          value: 997,
          unit: "руб",
          groupType: 1,
        },
        {
          key: "width",
          text: "Ширина",
          value: 15.5,
          unit: "см",
          groupType: 1,
        },
        {
          key: "height",
          text: "Высота",
          value: 150,
          unit: "см",
          groupType: 1,
        },
        {
          key: "weight",
          text: "Вес",
          value: 1.749,
          unit: "кг",
          groupType: 1,
        },
        {
          key: "voltage",
          text: "Напряжение",
          value: 12,
          unit: "В",
          groupType: 2,
        },
        {
          key: "powerSupply",
          text: "Источник питания",
          value: 2,
          type: 2,
          unit: "",
          groupType: 2,
        },
        {
          key: "colorTemperature",
          text: "Температура свечения",
          value: 1000,
          unit: "в К",
          groupType: 2,
        },
      ],
      watts: [
        { id: 1, text: 14, unit: "wt" },
        { id: 2, text: 24, unit: "wt" },
        { id: 3, text: 34, unit: "wt" },
      ],
      colors: [
        { id: 1, text: "pink", unit: "", img: "lamp_3_pink.jpg" },
        { id: 2, text: "green", unit: "", img: "lamp_3_green.jpg" },
      ],
    },
  ];

  const [popupImgActive, setPopupImgActive] = useState(false);
  const [popupImgData, setPopupImgData] = useState({});
  const [popupDescActive, setPopupDescActive] = useState(false);
  const [popupDescData, setPopupDescData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState({});

  const popupImgClickHandler = () => {
    setPopupDescActive(false);
    setPopupImgActive((current) => !current);
  };

  const popupSetImgData = (id) => setPopupImgData((current) => (current = id));
  const popupDescClickHandler = () => {
    setPopupImgActive(false);
    setPopupDescActive((current) => !current);
  };
  const popupSetDescData = (properties) => setPopupDescData((current) => (current = properties));

  useEffect(() => {
    const handleSearchProduct = (e) => {
      setSearchValue(e.detail);
    };

    const handleSetFilter = (e) => {
      setFilter(e.detail);
    };

    document.addEventListener("searchProduct", handleSearchProduct);
    document.addEventListener("filter", handleSetFilter);

    return () => {
      document.removeEventListener("searchProduct", handleSearchProduct);
      document.removeEventListener("filter", handleSetFilter);
    };
  }, []);

  const applyFilters = (product, filter) => {
    return Object.keys(filter).every((filterKey) => {
      const filterValue = filter[filterKey];
      if (!filterValue) return true;

      if (filterKey.includes("-from")) {
        const key = filterKey.split("-from")[0];
        if (key === "price") {
          return product.price >= parseFloat(filterValue);
        } else {
          const property = product.properties.find((prop) => prop.key === key);
          return property ? property.value >= parseFloat(filterValue) : true;
        }
      }

      if (filterKey.includes("-to")) {
        const key = filterKey.split("-to")[0];
        if (key === "price") {
          return product.price <= parseFloat(filterValue);
        } else {
          const property = product.properties.find((prop) => prop.key === key);
          return property ? property.value <= parseFloat(filterValue) : true;
        }
      }

      if (["voltage", "powerSupply", "colorTemperature"].includes(filterKey)) {
        const property = product.properties.find((prop) => prop.key === filterKey);
        return property ? property.value == filterValue : true;
      }
      return true;
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchValue.toLowerCase());
    const matchesFilter = applyFilters(product, filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={style["products-list"]}>
      {products
        .filter((product) => product.id === popupImgData.id && product.colors)
        .flatMap((product) =>
          product.colors.map((color) =>
            color.id === popupImgData.color ? (
              <PopupImg clicked={popupImgActive} img={color.img} clickHandler={popupImgClickHandler} key={color.id} />
            ) : null
          )
        )}

      {Object.keys(popupDescData).length !== 0 ? (
        <PopupDesc clicked={popupDescActive} clickHandler={popupDescClickHandler} properties={popupDescData} />
      ) : null}

      {filteredProducts.map(({ id, title, price, priceType, description, properties, watts, colors }) => (
        <Product
          id={id}
          title={title}
          price={price}
          priceType={priceType}
          description={description}
          properties={properties}
          watts={watts}
          colors={colors}
          searchValue={searchValue}
          popupImgClickHandler={popupImgClickHandler}
          popupSetImgData={popupSetImgData}
          popupDescClickHandler={popupDescClickHandler}
          popupSetDescData={popupSetDescData}
          key={id}
        />
      ))}
    </div>
  );
}

export default ProductList;

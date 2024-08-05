import React, { useState, useEffect } from "react";
import style from "./filter.module.css";
import FilterGroup from "../filterGroup/FilterGroup";

function Filter() {
  const filterCategories = [
    {
      key: "price",
      text: "Цена",
      unit: "руб",
      groupType: 1,
    },
    {
      key: "width",
      text: "Ширина",
      unit: "см",
      groupType: 1,
    },
    {
      key: "height",
      text: "Высота",
      unit: "см",
      groupType: 1,
    },
    {
      key: "weight",
      text: "Вес",
      unit: "кг",
      groupType: 1,
    },
    {
      key: "voltage",
      text: "Напряжение",
      unit: "В",
      options: [
        {
          value: 5,
          text: 5,
        },
        {
          value: 12,
          text: 12,
        },
        {
          value: 220,
          text: 220,
        },
      ],
      groupType: 2,
    },
    {
      key: "powerSupply",
      text: "Источник питания",
      type: 1,
      unit: "",
      options: [
        {
          value: 1,
          text: "Cеть",
        },
        {
          value: 2,
          text: "Батарейки",
        },
        {
          value: 3,
          text: "Аккумулятор",
        },
      ],
      groupType: 2,
    },
    {
      key: "colorTemperature",
      text: "Температура свечения",
      unit: "в К",
      options: [
        {
          value: 1000,
          text: 1000,
        },
        {
          value: 2000,
          text: 2000,
        },
        {
          value: 3000,
          text: 3000,
        },
        {
          value: 4000,
          text: 4000,
        },
        {
          value: 5000,
          text: 5000,
        },
        {
          value: 6000,
          text: 6000,
        },
      ],
      groupType: 2,
    },
  ];

  const [filter, setFilter] = useState({});

  const filterHandler = (key, value) => {
    setFilter((prevFilter) => {
      const newFilter = { ...prevFilter, [key]: value };
      return newFilter;
    });
  };

  useEffect(() => {
    handleCustomEvent(filter);
  }, [filter]);

  const handleCustomEvent = (newFilter) => {
    const event = new CustomEvent("filter", {
      bubbles: true,
      detail: newFilter,
    });
    document.dispatchEvent(event);
  };

  return (
    <form className={style.filter} action="#">
      {filterCategories.map((categorie) => {
        const { key, text, unit, groupType, options } = categorie;

        return (
          <FilterGroup
            key={key}
            filterKey={key}
            text={text}
            unit={unit}
            groupType={groupType}
            options={options}
            filterHandler={filterHandler}
          />
        );
      })}
    </form>
  );
}

export default Filter;

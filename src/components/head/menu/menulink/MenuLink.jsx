import React from "react";
import style from "./menuLink.module.css";

function MenuLink({ link, title }) {
  return (
    <a href={link} className={`${style.menu__link} ${title === "Главная" ? style["menu__link--active"] : ""}`}>
      {title}
    </a>
  );
}

export default MenuLink;

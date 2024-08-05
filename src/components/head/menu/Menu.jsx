import React from "react";
import style from "./menu.module.css";
import MenuItem from "./menuitem/MenuItem";

function Menu({ menuConfig }) {
  return (
    <ul className={style.menu}>
      {menuConfig.map((menu, i) => (
        <MenuItem menu={menu} key={i} />
      ))}
    </ul>
  );
}

export default Menu;

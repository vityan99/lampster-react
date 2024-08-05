import React from "react";
import style from "./header.module.css";
import Logo from "../logo/Logo";
import HeaderMenu from "../menu/Menu";
import Controllers from "../controllers/Controllers";

function Header() {
  const menuConfig = [
    {
      title: "Главная",
      link: "",
    },
    {
      title: "Каталог",
      link: "/catalog",
    },
    {
      title: "Контакты",
      link: "/contacts",
    },
  ];

  return (
    <header className={style.header}>
      <Logo />
      <HeaderMenu menuConfig={menuConfig} />
      <Controllers />
    </header>
  );
}

export default Header;

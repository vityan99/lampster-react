import React from "react";
import style from "./logo.module.css";
import LogoText from "./logotext/LogoText";
import Logotype from "./logotype/Logotype";

function Logo() {
  return (
    <a href="http://yandex.ru/" className={style.logo}>
      <Logotype />
      <LogoText />
    </a>
  );
}

export default Logo;

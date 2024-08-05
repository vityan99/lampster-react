import React from "react";
import style from "./logoText.module.css";

function LogoText() {
  return (
    <span>
      lamp
      <span className={style["logo__text-primary"]}>ster</span>
    </span>
  );
}

export default LogoText;

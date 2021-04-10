import { useState, useEffect } from "react";
import React, { Component } from "react";
import style from "../../style/Header.module.scss";

const Header = (data) => {
  return <div className={style.displayFlex}>
      <h1>Where in the world</h1>
      {data.children}
      </div>;
};
export default Header;

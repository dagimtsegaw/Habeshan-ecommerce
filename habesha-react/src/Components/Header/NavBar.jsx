// src/components/NavBar.js
import React from "react";
import styles from "./Header.module.css";

const NavBar = () => {
  return (
    <nav>
      <div className={styles.menu_icon}>☰</div>
      <ul className={styles.nav_menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop All</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">Kids</a>
        </li>
        <li>
          <a href="#">Sale</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

// src/components/Header.js
import React from "react";
import classes from "./Header.module.css";
import { BiCart } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";

const Header = ({ cartCount }) => {
  return (
    <header className={classes.header_container}>
      <h1>Habeshan Ecommerce</h1>
      <div className={classes.search_container}>
        <input
          placeholder="Search Product"
          type="text"
          className={classes.search_input}
        ></input>
        <IoIosSearch className={classes.search_icon} size={25} />
      </div>
      <button className={classes.signin_btn}>Sign In</button>
      <div id="cart-icon">
        <BiCart size={35} />
        <span>{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;

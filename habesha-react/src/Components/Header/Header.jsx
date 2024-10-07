import React, { useState, useContext } from "react";
import { BiMenu, BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import styles from "./Header.module.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [{ basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>Habeshan</h1>
        </div>

        <div className={styles.searchContainer}>
          <input
            placeholder="Search products..."
            type="text"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <IoIosSearch size={20} />
          </button>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <button className={styles.signInButton}>
            <BiUser size={20} />
            <span>Sign In</span>
          </button>
          <div className={styles.cartContainer}>
            <Link to="/cart">
              <HiOutlineShoppingBag size={24} style={{ color: "black" }} />
              <span className={styles.cartCount}>{totalItem}</span>
            </Link>
          </div>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BiMenu size={24} />
        </button>
      </header>
      <NavBar />
    </>
  );
};

export default Header;

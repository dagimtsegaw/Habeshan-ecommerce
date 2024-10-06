import React, { useState } from "react";
import { BiCart, BiMenu, BiUser } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import styles from "./Header.module.css";

const Header = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
          <BiCart size={24} style={{ color: "black" }} />
          <span className={styles.cartCount}>{cartCount}</span>
        </div>
      </nav>

      <button
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <BiMenu size={24} />
      </button>
    </header>
  );
};

export default Header;

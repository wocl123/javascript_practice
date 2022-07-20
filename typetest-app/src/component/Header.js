import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <header>Type Test</header>
      <div className={styles.menu}>
        <Link to="/">Home</Link>
        <Link to="/introduce">Introduce</Link>
        <Link to="/post">Post</Link>
        <Link to="/">Another</Link>
      </div>
    </div>
  );
};

export default Header;

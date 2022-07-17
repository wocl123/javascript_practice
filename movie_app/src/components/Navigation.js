import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/tech">Tech</Link>
    </div>
  );
}

export default Navigation;

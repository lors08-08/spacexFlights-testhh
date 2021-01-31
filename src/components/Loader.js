import React from "react";
import styles from "./Filters.module.css";
import img from "./img/NicePng_fallout-logo-png_414401.png";

function Loader() {
  return (
    <div className={styles.loader}>
      <img alt="loader" src={img} />
    </div>
  );
}

export default Loader;

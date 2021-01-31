import React from "react";
import styles from "./Filters.module.css";
import img from "./img/Group6.svg";

function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <img alt="loader" src={img} />
      <h2>Sorry,we can't find anything</h2>
    </div>
  );
}

export default EmptyList;

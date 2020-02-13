import React from "react";
import styles from "./Control.module.css";

const control = props => {
  return (
    <div className={styles.Control}>
      <div className={styles.Title}>{props.title} ${props.price.toFixed(2)}</div>
      <div className={styles.Count}>
        <input type="number" onChange={props.changed} value={props.value}></input>
      </div>
      <div>
        <button className={styles.Add} onClick={props.increase}>+</button>
        <button className={styles.Remove} onClick={props.decrease}>-</button>
      </div>
    </div>
  );
};

export default control;

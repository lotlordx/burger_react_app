import React from "react";
import styles from "./Modal.module.css";

const modal = props => {
  let showClass = props.showModal
    ? `${styles.BackDrop} ${styles.DisplayBlock}`
    : `${styles.BackDrop}  ${styles.DisplayNone}`;

    let cancelButton = `${styles.CancelButton} ${styles.TopRight}`
  return (
    <div className={showClass}>
      <div className={styles.Modal}>
        <div onClick={props.close} className={cancelButton}>X</div>
        {props.children}
      </div>
    </div>
  );
};

export default modal;

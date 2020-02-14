import React from "react";
import styles from "./OrderPreview.module.css";
import PRICES from "../../../constants/ingredientPrices";

const orderPreview = props => {
  let itemsOrdered = Object.keys(props.items).map(key => {
    return (
      <li>
        <strong>
          {key} : {props.items[key]}
        </strong>{" "}
        cost per item = ${PRICES[key]}
      </li>
    );
  });
  return (
    <div className={styles.OrderPreview}>
      <div className={styles.TextTitle}>Burger Order</div>
      <div className={styles.Items}>
        <ul>{itemsOrdered}</ul>
      </div>
    </div>
  );
};

export default orderPreview;
